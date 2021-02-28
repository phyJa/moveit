import { createContext, ReactNode, useState } from "react";
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
}

interface ChallengesProviderProps {
    children: ReactNode; // To accept React Elements
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
    // States
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(50);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    // A common algorithm to define the experience required to the
    // next level in the games 
    const experienceToNextLevel = Math.pow(4 * (level + 1), 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
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
                    resetChallenge
                }
            }
        >
            {children}
        </ChallengesContext.Provider>
    );
}