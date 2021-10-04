import { LimitRequestsError } from './LimitReqestsERROR';


const apiKeys = [
    "f17acef34dbb4414a152fb4b734a54e8",
    "a1f44baea84d4543adfa3f17395f2aab",
    "c08e381224ec4868bb145ac568d51ee9",
    "d0aef524cfc14d6ba3f35bc68ab620b9",
    "06238180649d43e0bffc9f3ac6536dc3",
];
const apiKeysMaxIndex = apiKeys.length;

const getApiKey = (key) => {
    return `apiKey=${apiKeys[key]}`;
};
function makeCounter() {
    let count = 0;
    return function() {
        if (count === apiKeysMaxIndex) {
            return count;
        }
        return count++
    };
}

let KEY = makeCounter();
export let APIKEY = getApiKey(KEY());

export const setKey = () => {
    const next = KEY();
    if (next === apiKeysMaxIndex) {
        throw new LimitRequestsError(
            "Daily points limit of 150 has been reached on all apikeys"
        );
    }
    APIKEY = getApiKey(next);
};

