import styled from "styled-components"

export const FooterDiv = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    background-color: black;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ContactDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    a {
        display: flex;
        margin-right: 25px;
        text-decoration: none;
        color: white;
        align-items: center;

        img {
            padding-right: 5px;
            width: 20px;
            vertical-align: middle;
        }
    }
`