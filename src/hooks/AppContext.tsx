import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from 'react';


interface Props {
    children: ReactNode;
}

interface IContext {
    context: File;
    setContext: Dispatch<SetStateAction<File>>;
}

const AppContext = createContext({} as IContext);

const AppProvider = ({ children }: Props) => {
    const [context, setContext] = useState({} as File);
    
    return (
        <AppContext.Provider value={{ context, setContext }}>
            { children }
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);


export { AppContext, AppProvider, useAppContext };