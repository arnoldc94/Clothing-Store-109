var catalog = [     //create products total 9
{
    _id: "boardShorts",
    title: "Board Shorts",
    category: "Shorts",
    price: 15.99,
    stock: 13,
    image: "boardShorts.jpeg",//from product folder in public
    discount: 5,
    minimum: 1,
},
{
    _id: "tanT",
    title: "Black T-Shirt",
    category: "T-Shirt",
    price: 10.00,
    stock: 18,
    image:"blackShirt.jpeg",
    discount: 10,
    minimum: 1,
},
{
    _id: "gymShortsOne",
    title: " Gym Shorts White",
    category: "Shorts",
    price: 6.99,
    stock: 15,
    image:"whiteShort.jpeg",
    discount: 0,
    minimum: 1,
},
{
    _id: "longSleeve",
    title: " Long Sleeve",
    category: "Long Sleeve",
    price: 8.99,
    stock: 17,
    image:"longSleeve.jpeg",
    discount: 5,
    minimum: 1, 
},
{
    _id: "swimSuit",
    title: " Swim Trunks",
    category: "Shorts",
    price: 5.99,
    stock: 5,
    image:"swimTrunks.jpeg",
    discount: 0,
    minimum: 1,
},
{
    _id: "tankTop",
    title: " Tank Top",
    category: "Tank Top",
    price: 5.99,
    stock: 20,
    image:"tankTop.jpeg",
    discount: 5,
    minimum: 1,
},
{
    _id: "gymShortsBlack",
    title: " Gym Shorts Black",
    category: "Shorts",
    price: 6.99,
    stock: 30,
    image:"blackShorts.jpeg",
    discount: 0,
    minimum: 1,
},
{
    _id: "gymShortsRed",
    title: " Gym Shorts Red",
    category: "Shorts",
    price: 6.99,
    stock: 20,
    image:"redShorts.jpeg",
    discount: 5,
    minimum: 1,
},
{
    _id: "SunGlasses",
    title: " Sun Glasses",
    category: "Glasses",
    price: 30.00,
    stock: 15,
    image:"glasses.jpeg",
    discount: 10,
    minimum: 1,
},

];


class ItemService {
    
    getCatalog() {
        // logic to call server
        // and retreive an array of products

        // return mock data
        return catalog;
    }

    saveItem(item) {

    }

    getItemDetails(id) {

    }


}

export default ItemService;
