import './styles.scss';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Preview from '../../components/Preview';


const Home = () => {

    return (
        <div>
            <Header />

            <div className='main'>
                <div className='left'>
                    <Form />
                </div>

                <div className='right'>
                    <Preview />
                </div>
            </div>
        </div>
    );
}


export default Home;