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
`

export const Button = styled.button`
    margin-left: 10px;
    cursor: pointer;
`

export const GarageDiv = styled.div`
    p {
        display: block;
    }
`

export const ResultDiv = styled.div`
    display: flex;
    justify-items: center;
    margin-bottom: 15px;
    align-items: center;

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