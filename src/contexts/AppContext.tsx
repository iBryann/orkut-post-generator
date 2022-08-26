import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useRef,
    useState
} from 'react';
import { IContextData } from '../typings/interfaces';


interface Props {
    children: ReactNode;
}

interface IContext {
    context: IContextData;
    setContext: Dispatch<SetStateAction<IContextData>>;
}

const AppContext = createContext({} as IContext);

const AppProvider = ({ children }: Props) => {
    const previewRef = useRef({} as HTMLDivElement);
    const [context, setContext] = useState<IContextData>({
        previewRef,
        form: {
            author: '',
            description: '',
            title: '',
            image: {} as File
        }
    });
    
    return (
        <AppContext.Provider value={{ context, setContext }}>
            { children }
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);


export { AppContext, AppProvider, useAppContext };