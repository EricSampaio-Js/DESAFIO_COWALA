import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`

*,:before,:after{

    margin: 0;
    padding: 0;
    
    list-style:none;
    text-decoration: none;
    box-sizing: border-box;
}


:root{
${'' /* ================= COLOR ==================*/}
    --bg-color-primary: #0A1633;
    --bg-color-second: #00D9D0;

    --bg-color-neutro-primary:#E5E5E5;
    --bg-color-neutro-second:#EDEDED;

    --bg-color-error:#720808;
    --bg-color-sucess:#3B83BD;

    --bg-color-complement-one:#1f4292;
    --bg-color-complement-two:#62dfda;
    --bg-color-complement-three:#d1d0d0;
    

${'' /* ===========  FONT AN TYPOGRAFY ====== */}
    --font-primary:'Roboto', sans-serif;
    --font-normal: 1.125rem;
    --font-error:0.75rem;
}
body{
    font-family: var(--font-primary);
}

button,input{
    border: none;
    outline:none;
}


`