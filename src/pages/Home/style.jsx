import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    width: 1200px;
    margin: 0 auto;
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    div{
        border: 1px solid red;
    }
    

`;