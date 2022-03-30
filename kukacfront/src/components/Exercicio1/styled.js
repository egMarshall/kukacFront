import styled from "styled-components"

export const EnunciadoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h3 {
        justify-content: center;
        align-items: center;
        margin-bottom: 2px;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    margin: 10px;
    height: 20px;
    font-family: 'Dosis', 'sans-serif';
`

export const Button = styled.button`
    font-family: 'Dosis', 'sans-serif';
    margin-left: 10px;
    height: 30px;
    width: 80px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    text-align: center;
    :hover {
        background-color: lightgray;
    }
`

export const ResultDiv = styled.div`
    display: flex;
    justify-items: center;
    margin-bottom: 15px;

    p {
        padding: 3px;
        font-size: 18px;
    }
`