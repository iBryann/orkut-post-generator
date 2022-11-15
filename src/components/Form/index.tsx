import html2canvas from 'html2canvas';
import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import InputFile from '../InputFile';
import { StoreType } from '../../store';
import { changeForm, FieldsType } from '../../store/reducers/formSlice';


const Form = () => {
    const { author, description, title } = useSelector((state: StoreType) => state.form);
    const dispatch = useDispatch();

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name: n, value: v } = e.currentTarget;
        const name = n as FieldsType;
        const value = v as any;

        dispatch(changeForm({ name, value }));
    }

    function download() {
        html2canvas(document.querySelector<HTMLDivElement>('.preview')!)
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