import { Price } from "./price.model";

export class Book{
    ISBN: number;
    title: string;
    author: string;
    summary: string;
    image: string;
    price: Price
}