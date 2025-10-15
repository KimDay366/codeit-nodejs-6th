export default class Product {
    constructor(name, description, price, tags, images, favoriteCount = 0){
        this.name = name;
        this.description = description;
        this.price = price;
        this.tags = tags;
        this.images = images;
        this.favoriteCount = favoriteCount;
    }

    favorite(favoriteCount){
        favoriteCount += 1;
    }
}

