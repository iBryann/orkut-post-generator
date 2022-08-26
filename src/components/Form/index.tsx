import { ChangeEvent, FormEvent } from 'react';

import './styles.scss';
import InputFile from '../InputFile';
import { useAppContext } from '../../contexts/AppContext';
import html2canvas from 'html2canvas';


const Form = () => {
    const { context: { previewRef, form: { author, description, title } }, setContext } = useAppContext();

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.currentTarget;

        setContext(s => ({
            ...s,
            form: ({ ...s.form, [name]: value })
        }));
    }

    function download() {
        html2canvas(previewRef.current)
        .then(function(canvas) {
            const dataImg = canvas.toDataURL(`image/png`); // png (padrão) / jpeg / webp (Chrome)
            const downloadLink = document.createElement('a');
    
            downloadLink.setAttribute('download', `${title.replaceAll(' ', '-')}`);
            downloadLink.setAttribute('href', dataImg);
            downloadLink.click();
        })
        .catch(console.error);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        download();
    }

    return (
        <form onSubmit={handleSubmit}>
            <header>
                <h2>Criar comunidade</h2>

                <div className='breadcrumb'>
                    Início <span>&gt;</span> Comunidades <span>&gt; Criar comunidade</span>
                </div>
            </header>

            <InputFile />

            <div className='input--wrapper'>
                <label htmlFor=''>Autor</label>
                <input
                    name='author'
                    value={author}
                    onChange={handleChange}
                    type='text'
                    placeholder='Qual o @ do autor?'
                    maxLength={30}
                />
            </div>

            <div className='input--wrapper'>
                <label htmlFor=''>Título da comunidade</label>
                <input
                    name='title'
                    value={title}
                    onChange={handleChange}
                    type='text'
                    placeholder='Como vamos chamar sua comunidade?'
                    maxLength={30}
                />
            </div>

            <div className='input--wrapper'>
                <label htmlFor=''>Descrição</label>
                <textarea
                    name='description'
                    value={description}
                    onChange={handleChange}
                    placeholder='Digite uma descrição'
                    maxLength={900}
                />
            </div>

            <button type='submit'>Baixar</button>
        </form>
    );
}


export default Form;