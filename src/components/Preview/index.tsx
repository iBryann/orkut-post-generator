import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';
import BackgroundImg from '../../assets/imgs/background.png';
import { StoreType } from '../../store';


const Preview = () => {
    const { author, description, image, title } = useSelector((state: StoreType) => state.form);
    const imgURL = useMemo(() => (
        image.name
            ? URL.createObjectURL(image)
            : ''
    ), [image]);

    return (
        <div className='preview'>
            <img className='bg' src={BackgroundImg} alt="Background image" />

            <div
                className="picture"
                style={{ backgroundImage: `url(${imgURL})` }}
            ></div>

            <h2 className="title">{title}</h2>

            <h3 className="title-secondary">{title}</h3>

            <div className="text">{
                description.split('\n').map((paraghaph, index) => <p key={index}>{paraghaph}</p>)
            }</div>

            <h2 className="author">{author}</h2>
        </div>
    );
}


export default Preview;