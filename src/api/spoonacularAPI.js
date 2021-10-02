import axios from 'axios';
import { addAPIKEY } from './addAPIKEY';

const BASEURL = "https://api.spoonacular.com/food/products";
const SEACH = BASEURL + "/search?query=";

export const getProduct = async function (nameProduct) {
    try {
        const product = `/${nameProduct}`;
        const url = addAPIKEY(BASEURL + product);

        const response = await axios.get(url);
        const data = response.data;
        console.lof(data);
        return data;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const searchProductCategory = async function(nameCategory, count = 5) {
    try {
        const category = `=${nameCategory}`;
        const categoryCount = `&number=${count}`;
        const url = addAPIKEY(SEACH + category + categoryCount);

        const response = await axios.get(url);
        const data = response.data;
        console.lof(data)
        return data;
    } catch (error) {
        console.log(error)
        return false;
    }
}


