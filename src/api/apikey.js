const apiKeys = ["f17acef34dbb4414a152fb4b734a54e8", "a1f44baea84d4543adfa3f17395f2aab"];
const getApiKey = (key) => {
    return `apiKey=${apiKeys[key]}`;
};
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

let KEY = makeCounter();
export let APIKEY = getApiKey(KEY());

export const setKey = () => {
    const next = KEY();
    if (next > apiKeys.length - 1) {
        throw new Error('Закончились все бесплатные запросы к API')
    }
    APIKEY = getApiKey(next);
    console.log(APIKEY)
};

