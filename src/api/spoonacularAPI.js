import axios from 'axios';
import { setKey, APIKEY } from 'api/apikey';
import { LimitRequestsError } from 'api/LimitReqestsERROR';

const BASEURL = "https://api.spoonacular.com/food/products";
const SEACH = BASEURL + "/search?query";

function addAPIKEY(url) {
    const regex = /\?/g;
    if (url.match(regex)) {
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
                return error;
            } 
        }
    }
}

export async function getProduct(productID) {
    const request = async () => {
        const product = `/${productID}`;
        const url = addAPIKEY(BASEURL + product);

        const response = await axios.get(url);
        const data = response.data;
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
        return data;
    };

    return await ERRORWrapper(request);
}
