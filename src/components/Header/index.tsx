import LogoImg from '../../assets/imgs/logo.png';
import { Figma, GitHub, LinkedIn } from '../../assets/icons';

import './styles.scss';


const Header = () => {

    return (
        <header className='header'>
            <div className='header--container'>
                <div className='header--brand'>
                    <img src={LogoImg} alt='Orkut logomarca' />
                </div>

                <div className='header--social'>
                    <span>Criado por Bryann Henrique</span>

                    <ul>
                        <li><a target='_blank' href='https://www.linkedin.com/in/ibryann'><LinkedIn /></a></li>
                        <li><a target='_blank' href='https://github.com/iBryann/orkut-post-generator'><GitHub /></a></li>
                        <li><a target='_blank' href='https://www.figma.com/file/MUeVt7QTV6AaQMmEif5y8f/Projetos-Mentoria?node-id=14%3A18'><Figma /></a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}


export default Header;