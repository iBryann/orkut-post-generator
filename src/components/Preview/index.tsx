import { memo, useEffect, useMemo, useRef } from 'react';

import './styles.scss';
import BackgroundImg from '../../assets/imgs/background.png';
import { useAppContext } from '../../contexts/AppContext';


const Preview = () => {
    const { context: { form, previewRef } } = useAppContext();
    const { author, description, image, title } = form;

    const imgURL = useMemo(() => (
        image.name 
            ? URL.createObjectURL(image)
            : ''
    ), [image]);

    return (
        <div className='preview' ref={previewRef}>
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