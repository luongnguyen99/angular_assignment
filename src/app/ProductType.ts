import { CategoryType } from './CategoryType';

export class ProductType {
    id: number;
    categoryId : number;
    name: string;
    price: number;
    description: string;
    img: string;
    status: boolean;

    constructor() {
    };
}