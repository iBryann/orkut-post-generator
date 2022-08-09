import { MutableRefObject } from 'react';

export interface IForm {
    image: File | null;
    title: string;
    author: string;
    description: string;
}

export interface IContextData{
    canvasRef: MutableRefObject<HTMLCanvasElement>
    form: IForm;
}