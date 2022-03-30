import styled from "styled-components"

export const EnunciadoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
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

export const GarageDiv = styled.div`
    min-width: 400px;
    max-width: fit-content;
    min-height: 100px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    p {
        display: block;
    }
`

export const ResultDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-bottom: 15px;
    align-items: center;
    gap: 10px;
    p {
        display: flex;
        justify-content: space-evenly;
        font-size: 18px;
        margin-right: 10px;

        p {
            margin-right: 2px;
            margin-left: 5px;
        }
    }
`