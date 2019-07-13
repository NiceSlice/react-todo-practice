import React from "react";
import styled from "styled-components";

export const broj = 10;


const Div = styled.div`
    background: red;
    height: 100px;
    width: 100px;

    &:hover {
        background: ${props =>
            props.color};;
    }
`


const Test = () => {
    return <div>nekaaaaj</div>
}

export default Div;