import styled from "styled-components"

export const EnunciadoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F3B202;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    padding-bottom: 20px;
    
    p {
        margin: 0 50px;
        text-align: center;
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

export const AddressDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    max-width: fit-content;
    min-height: 150px;
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
    gap: 20px;

    p {
        display: flex;
        justify-content: space-evenly;
        font-size: 18px;
        padding: 2px;

        p {
            margin-right: 2px;
            margin-left: 5px;
        }
    }
`