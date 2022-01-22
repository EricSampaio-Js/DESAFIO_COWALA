import styled,{css} from 'styled-components';


export const ButtonNormal = styled.button`
    width: 139px;
    height: 44px;
    background-color:var(--bg-color-primary);

    font-weight:400;
    font-size:var(--font-normal);
    color:var(--bg-color-neutro-primary);

    cursor:pointer;

    &:hover{
        box-shadow: 0 0 8px 0 var( --bg-color-complement-one);
    }


`
export const ButtonLarge = styled.button`
    width: 183px;
    height: 44px;
    background-color:var( --bg-color-second);

    font-weight:400;
    font-size:var(--font-normal);
    color:var( --bg-color-primary);
    cursor:pointer;

    &:hover{
        box-shadow: 0 0 8px 0 var(--bg-color-complement-two);
    }

`