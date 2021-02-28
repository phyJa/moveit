import { 
    createContext,
    ReactNode, 
    useState, 
    useContext, 
    useEffect 
} from "react";

import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    resetCountdown: () => void;
    startCountdown: () => void;
}

interface CountdownContextProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeOut: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownContextProps) {
    // Note here that this context depends on the ChallengesContext.
    // If you use in the _app.tsx file, it must be a child
    // of the ChallengesProvider
    const { startNewChallenge } = useContext(ChallengesContext);
    
    // Constants
    // States
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    //
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    
    // Functions
    function startCountdown() {
        setIsActive(true);
    }
    function resetCountdown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setHasFinished(false);
        setTime(25 * 60);
    }
    useEffect(
        () => {
            if(isActive && time > 0) {
                countdownTimeOut = setTimeout(
                    () => {
                        setTime(time - 1);
                    },
                    1000
                );
            } else if(isActive && time === 0) {
                setHasFinished(true);
                setIsActive(false);
                startNewChallenge();
            }
        },
        [isActive, time]
    );
    return (
        <CountdownContext.Provider
            value={
                {
                    minutes,
                    seconds,
                    hasFinished,
                    isActive,
                    resetCountdown,
                    startCountdown
                }
            }
        >
            {children}
        </CountdownContext.Provider>
    );
}
