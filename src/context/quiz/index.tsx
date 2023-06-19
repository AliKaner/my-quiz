import { createContext,useState,Dispatch,SetStateAction,useMemo,FC,ReactNode, useContext } from "react";
import {Quiz, Option} from "../../shareds/types";

interface QuizContext {
    quiz:Quiz|null;
    difficulty?:string;
    category?:string;
    setCategory:Dispatch<SetStateAction<string | undefined>>;
    setDifficulty:Dispatch<SetStateAction<string | undefined>>;
}
interface QuizProvider {
    children:ReactNode;
}

const QuizContext = createContext<QuizContext>({} as QuizContext);

export const QuizProvider:FC<QuizProvider> = ({children}) => {
    const [quiz,setQuiz] = useState<Quiz|null>(null);
    const [category, setCategory] = useState<string>();
    const [difficulty, setDifficulty] = useState<string>();
 
    const contextValue = useMemo(() => ({
        quiz,
        category, setCategory,
        difficulty, setDifficulty,
        setQuiz,
    }),[quiz,setQuiz,category, setCategory,difficulty, setDifficulty,])

    return(
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuiz = () => useContext(QuizContext);