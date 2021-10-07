import { decode } from 'html-entities';

export const decoder = (str) => {
    const decoded = decode(str, { level: "xml" });
    const removeElements = decoded.replace(
        /(&\w+;)|(\s?(<\/?\w+>|<\w+\s+\/>))/gm,
        ""
    );
    return removeElements;
};
