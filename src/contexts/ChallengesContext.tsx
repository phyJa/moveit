import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import challenges from "../../challenges.json";


interface Challenge {
    type: "eye" | "body";
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel:number ;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode; // To accept React Elements
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider(
        {
            children,
            ...rest
        }: ChallengesProviderProps
    ) {
    // States
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    // A common algorithm to define the experience required to the
    // next level in the games 
    const experienceToNextLevel = Math.pow(4 * (level + 1), 2);

    useEffect(
        () => {
            Notification.requestPermission();
        },
        []
    );

    useEffect(
        () => {
            Cookies.set("level", String(level));
            Cookies.set("currentExperience", String(currentExperience));
            Cookies.set("challengesCompleted", String(challengesCompleted));
        },
        [level, currentExperience, challengesCompleted]
    );

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
        // Audio
        new Audio("/notification.mp3").play();
        // User permission
        if(Notification.permission === "granted") {
            new Notification("Novo desafio 🎉 ",
                {
                    body: `Valendo ${challenge.amount} XP!`
                }
            );
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return;
        }
        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;
        //
        if(finalExperience >= experienceToNextLevel) {
            levelUp();
            finalExperience = finalExperience - experienceToNextLevel;
        }
        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return(
        <ChallengesContext.Provider
            value={
                {
                    level,
                    currentExperience,
                    challengesCompleted,
                    activeChallenge,
                    experienceToNextLevel,
                    levelUp,
                    startNewChallenge,
                    resetChallenge,
                    completeChallenge
                }
            }
        >
            {children}
        </ChallengesContext.Provider>
    );
}