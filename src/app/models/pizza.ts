export class Pizza {
    name: string;
    ingredients: string[];
    imgPath: string;

    constructor (
        name: string,
        ingredients: string[],
        imgPath: string
    ) {
        this.name = name;
        this.ingredients = ingredients;
        this.imgPath = imgPath;
    }
}
