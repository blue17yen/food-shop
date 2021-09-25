import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,*::before,*::after {
        box-sizing: inherit;
    }
    html, body {
        height: 100%;
    }
    body {
        min-width: 320px;
        overflow-x: hidden;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
        padding: 0;
    }
    ul,li {
        list-style: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }
    button {
        padding: 0;
    }
    div#root {
        height: 100%;   
    }
`; 
