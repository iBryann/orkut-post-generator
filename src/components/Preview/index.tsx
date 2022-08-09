import { useEffect, useRef } from 'react';

import './styles.scss';
import BackgroundImg from '../../assets/imgs/background.png';
import { useAppContext } from '../../hooks/AppContext';


const Preview = () => {
    const { context: { canvasRef, form } } = useAppContext();

    async function loadBackground() {
        const img = new Image();

        return new Promise<boolean>((resolve, reject) => {
            img.src = BackgroundImg;
            img.onload = () => {
                drawImage(img, 0, 0, 713, 606);
                resolve(true);
            };
            img.onerror = () => {
                reject(false);
            };
        });
    }

    function loadImage() {
        const { image } = form;
        if (!image) return;
        const img = new Image();
        const fileReader = new FileReader();

        img.onload = () => drawImage(img, 6, 50, 129, 129);
        fileReader.readAsDataURL(image as File);
        fileReader.onload = () => img.src = fileReader.result as string;
    }

    function drawImage(image: HTMLImageElement, x: number, y: number, sWidth: number, sHeight: number) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(image, x, y, sWidth, sHeight);
    }

    function drawText(text: string, x: number, y: number, width: number, height: number, style: string) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')!;
        const data = `
            <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
                <foreignObject width='100%' height='100%'>
                    <div xmlns='http://www.w3.org/1999/xhtml' style='${style}'>
                        ${text}
                    </div>
                </foreignObject>
            </svg>
        `;
        const img = new Image();
        const svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svg);
        
        img.src = url;
        img.onload = function () {
            ctx.drawImage(img, x, y);
            URL.revokeObjectURL(url);
        };
    }

    async function renderPreview() {
        const { author, description, title } = form;
        
        await loadBackground();
        loadImage();
        drawText(title, 6, 185, 129, 42, 'font: 700 15px/21px Arial; color: #4E999C');
        drawText(title, 162, 55, 534, 21, 'font: 400 25px/21px Arial');
        drawText(description.replaceAll('\n', '<br />'), 305, 114, 372, 322, 'font: 400 16px/21px Arial; color: #081623');
        drawText(author, 324, 495, 372, 322, 'font: 400 15px/21px Arial');
    }

    useEffect(() => {
        renderPreview();
    }, [form]);

    useEffect(() => {
        loadBackground();
    }, []);

    return <canvas ref={canvasRef} id='canvas' width={713} height={606} />;
}


export default Preview;