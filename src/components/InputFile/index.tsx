import { useState } from 'react';
import './styles.scss';


const InputFile = () => {
    const [file, setFile] = useState<File>({} as File);
    
    function handleOpenDialog() {
        const dialog = document.createElement('input');
        dialog.type = 'file';
        dialog.click();

        dialog.addEventListener('change', () => {
            if (dialog.files) {
                setFile(dialog.files[0]);
            }
        });
    }

    return (
        <div className='input-file--wrapper'>
            <div className='input-file--label'>Foto da comunidade</div>

            <div className='button-wrapper' onClick={handleOpenDialog}>
                <input type='hidden' name='file' />
                <div className={`button-wrapper--filename ${ file.name && 'filled'}`}>
                    { file.name ? file.name : 'Selecione uma imagem'}
                </div>
                <button type='button' className='button-wrapper--button'>selecionar...</button>
            </div>
        </div>
    );
}


export default InputFile;