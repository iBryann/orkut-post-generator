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
        img.src = URL.createObjectURL(image);
        img.onload = () => drawImage(img, 6, 50, 129, 129);
    }

    function drawImage(image: HTMLImageElement, x: number, y: number, sWidth: number, sHeight: number) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(image, x, y, sWidth, sHeight);
    }

    
    async function renderPreview() {
        const { author, description, title } = form;

        await loadBackground();
        loadImage();

        drawText(title, 6, 185, 129, 42, 'font: 700 15px/21px Arial; color: #4E999C');
        drawText(title, 162, 55, 534, 21, 'font: 400 25px/21px Arial');
        // drawText(description.replaceAll('\n', '<br />'), 305, 114, 372, 322, 'font: 400 16px/21px Arial; color: #081623');
        // drawText(author, 324, 495, 372, 322, 'font: 400 15px/21px Arial');
        
        fillTextWithBreakRow(description, 305, 128, 50, 21, 16, '400 15px/21px Arial', '#000');
        fillTextWithBreakRow(author, 324, 510, 372, 21, 1, '400 15px/21px Arial', '#000');
    }

    function fillTextWithBreakRow(text: string, x: number, y: number, width: number, lineHeight: number, maxLines: number, style: string, color: string) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')!;
        const words = text.split(' ');
        let lines = [];
        let line = '';
    // debugger
        for (let i = 0; i <= words.length; i++) {
            if (line.length < width && words[i]) {
                line += words[i] + ' ';
            } else {
                lines.push(line.trim());
                line = '';
                words[i] && i--;
            }
        }
    
        if (lines.length > maxLines) {
            lines = lines.slice(0, maxLines - 1);
            lines.push('...');
        }
    
        ctx.save();
        ctx.fillStyle = color;
        ctx.font = style;

        lines.forEach(line => {
            if (line.includes('\n\n')) {
                const splitLine = line.split('\n\n');

                ctx.fillText(splitLine[0], x, y);
                y += lineHeight;

                ctx.fillText('', x, y);
                y += lineHeight;

                ctx.fillText(splitLine[1], x, y);
                y += lineHeight;
            }
            else {
                ctx.fillText(line, x, y);
                y += lineHeight;
            }
        });

        ctx.restore();
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
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            ctx.drawImage(img, x, y);
            URL.revokeObjectURL(url);
        };
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