import axios from 'axios';
import { setKey, APIKEY } from './apikey';
import { LimitRequestsError } from './LimitReqestsERROR';

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
        try {
            setKey();
            return await ERRORWrapper(callback);
        } catch (error) {
            if (error instanceof LimitRequestsError) {
                console.log(error);  
                return error;
            } 
        }
    }
}

export async function getProduct(productId) {
    const request = async () => {
        const product = `/${productId}`;
        const url = addAPIKEY(BASEURL + product);

        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        return data;
    };
    return await ERRORWrapper(request);
};

export async function searchProductCategory(nameCategory, count = 10, page = 0) {
    const request = async () => {
        const category = `=${nameCategory}`;
        const categoryCount = `&number=${count}`;
        
        // Skip so many products 
        // to display the desired number by pagination
        const skipCount = page === 0 ? `` : `&offset=${page * 10}`;

        const addProductInformation = `&addProductInformation=true`;
        const url = addAPIKEY(
            SEACH + category + categoryCount + skipCount + addProductInformation
        );

        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        return data;
    };

    return await ERRORWrapper(request);
}
