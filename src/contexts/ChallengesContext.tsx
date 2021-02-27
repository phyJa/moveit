import { createContext, ReactNode, useState } from "react";

interface ChallengesContextData {
    level: number;
    experience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode; // To accept React Elements
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [experience, setExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log("New challenge");
    }

    return(
        <ChallengesContext.Provider
            value={
                {
                    level,
                    experience,
                    challengesCompleted,
                    levelUp,
                    startNewChallenge
                }
            }
        >
            {children}
        </ChallengesContext.Provider>
    );
}