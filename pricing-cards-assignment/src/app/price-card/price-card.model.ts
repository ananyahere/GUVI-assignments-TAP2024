import { Feature } from "./feature.model";

export class PriceCard{
    public type: string;
    public price: number;
    public features: Feature[];
    constructor(type: string, price: number, features: Feature[]){
        this.type = type;
        this.price = price;
        this.features = features
    }

}