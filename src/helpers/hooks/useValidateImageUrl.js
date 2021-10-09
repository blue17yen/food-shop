/*
    Хук получает в параметрах ссылку на изоражение..
    Через регулярное выражение проверяет ссылку 
    валидирует формат изображения.
    Возвращает bool.
*/
export const useValidateImageUrl = (url) => {
    return url?.match(/\.(jpeg|jpg|gif|png)$/) != null;
}