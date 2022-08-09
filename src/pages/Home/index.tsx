import './styles.scss';
import Header from '../../components/Header';
import InputFile from '../../components/InputFile';
import { useAppContext } from '../../hooks/AppContext';


const Home = () => {
    const { context } = useAppContext();

    return (
        <div>
            <Header />

            <div className='main'>
                <div className='left'>
                    <form>
                        <header>
                            <h1>{context.name}</h1>
                            
                            <h2>Criar comunidade</h2>

                            <div className='breadcrumb'>
                                Início <span>&gt;</span> Comunidades <span>&gt; Criar comunidade</span>
                            </div>
                        </header>

                        <InputFile />

                        <div className='input--wrapper'>
                            <label htmlFor=''>Autor</label>
                            <input type='text' placeholder='Qual o @ do autor?' />
                        </div>

                        <div className='input--wrapper'>
                            <label htmlFor=''>Título da comunidade</label>
                            <input type='text' placeholder='Como vamos chamar sua comunidade?' />
                        </div>

                        <div className='input--wrapper'>
                            <label htmlFor=''>Descrição</label>
                            <textarea placeholder='Digite uma descrição' />
                        </div>

                        <button type='submit'>Baixar</button>
                    </form>
                </div>

                <div className='right'>
                    <canvas id='preview' width={476} height={476}></canvas>
                </div>
            </div>
        </div>
    );
}


export default Home;