import axios from 'axios';
import { setKey, APIKEY } from './apikey';

const BASEURL = "https://api.spoonacular.com/food/products";
const SEACH = BASEURL + "/search?query";

function addAPIKEY(url) {
    const regex = new RegExp("/?", "g");
    if (regex.test(url)) {
        return url + `&${APIKEY}`;
    }
    return url + `?${APIKEY}`;
}

async function ERRORWrapper(callback) {
    try {
        return await callback()
    } catch (error) {
        console.log(error);
        try {
            setKey();
            return await callback();
        } catch (error) {
            return [];
        }
    }
}

export async function getProduct(nameProduct) {
    const request = async () => {
        const product = `/${nameProduct}`;
        const url = addAPIKEY(BASEURL + product);

        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        return data;
    };
    return ERRORWrapper(request);
};

export async function searchProductCategory(nameCategory, count = 10) {
    const request = async () => {
        const category = `=${nameCategory}`;
        const categoryCount = `&number=${count}`;
        const addProductInformation = `&addProductInformation=true`;
        const url = addAPIKEY(
            SEACH + category + categoryCount + addProductInformation
        );

        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        return data;
    };

    return await ERRORWrapper(request);
}
