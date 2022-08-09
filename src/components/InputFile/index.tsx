import { useState } from 'react';
import { useAppContext } from '../../hooks/AppContext';
import './styles.scss';


const InputFile = () => {
    const { context, setContext } = useAppContext();
    
    function handleOpenDialog() {
        const dialog = document.createElement('input');
        dialog.type = 'file';
        dialog.click();

        dialog.addEventListener('change', () => {
            if (dialog.files) {
                setContext(dialog.files[0]);
            }
        });
    }

    return (
        <div className='input-file--wrapper'>
            <div className='input-file--label'>Foto da comunidade</div>

            <div className='button-wrapper' onClick={handleOpenDialog}>
                <input type='hidden' name='file' />
                <div className={`button-wrapper--filename ${ context.name && 'filled'}`}>
                    { context.name ? context.name : 'Selecione uma imagem'}
                </div>
                <button type='button' className='button-wrapper--button'>selecionar...</button>
            </div>
        </div>
    );
}


export default InputFile;