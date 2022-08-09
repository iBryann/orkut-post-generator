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
    const canvasRef = useRef({} as HTMLCanvasElement);
    const [context, setContext] = useState<IContextData>({
        canvasRef,
        form: {
            author: '',
            description: '',
            title: '',
            image: null
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