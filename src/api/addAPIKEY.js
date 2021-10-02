import { APIKEY as apikey } from "./apikey";

const APIKEY = `apiKey=${apikey}`;

export function addAPIKEY(url) {
    const regex = /?/g;
    if (regex.test(url)) {
        return url + `&${APIKEY}`;
    }
    return url + `?${APIKEY}`;
}
