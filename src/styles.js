import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 100%;
        height: 75px;
        background-color: #AAAAFF;
        border: 0;
        align: right;
        font-size: 24px;
        font-family: 'Roboto';
        padding: 0 10px;
        color: #FFFFFF;
    }
`
export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`