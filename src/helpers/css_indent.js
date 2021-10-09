
/*
    Элементы как кнопка, инпут ...
    принимают параметр margin в виде строки
    со значениями числового формата: "0 20 10 40",
    валидным для css margin параметра
*/

export function css_indent(string) {
    return string?.split(' ').map(value => Number(value) === 0 ? value : value + 'px').join(' ');
}