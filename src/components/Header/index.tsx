import Logo from '../../assets/imgs/logo.png';

import './styles.scss';


export const Header = () => {

    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Orkut post generator" />
            </div>

            <nav className="header__nav">
                <ul>
                    <li>Criado por Bryann Henrique</li>
                    <li>
                        <a href="#"></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}