import { MutableRefObject } from 'react';

export interface IForm {
    image: File;
    title: string;
    author: string;
    description: string;
}

export interface IContextData{
    previewRef: MutableRefObject<HTMLDivElement>
    form: IForm;
}