import './styles.scss';
import { useAppContext } from '../../hooks/AppContext';


const InputFile = () => {
    const { context: { form: { image } }, setContext } = useAppContext();
    
    function handleOpenDialog() {
        const dialog = document.createElement('input');
        dialog.type = 'file';
        dialog.multiple = false;
        dialog.accept = 'image/*';
        dialog.click();

        dialog.onchange = () => {
            const image = dialog.files && dialog.files[0];

            setContext(s => ({
                ...s,
                form: ({ ...s.form, image })
            }));
        }
    }

    return (
        <div className='input-file--wrapper'>
            <div className='input-file--label'>Foto da comunidade</div>

            <div className='button-wrapper' onClick={handleOpenDialog}>
                <div className={`button-wrapper--filename ${ image?.name && 'filled'}`}>
                    { image?.name ? image.name : 'Selecione uma imagem'}
                </div>
                
                <button type='button' className='button-wrapper--button'>selecionar...</button>
            </div>
        </div>
    );
}


export default InputFile;