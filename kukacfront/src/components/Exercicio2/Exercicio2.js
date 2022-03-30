import axios from "axios"
import { useState } from "react"
import { Button, Input, Form, EnunciadoDiv, ResultDiv } from "./styled"
import useForm from "../../Hooks/useForm"

const Exercicio2 = () => {

    const initialForm = {
        purchaseValue: "",
        userMoney: ""
    }

    const [results, setResults] = useState({})

    const [form, onChangeInput, cleanFields] = useForm(initialForm)

    const sendData = (event) => {
        event.preventDefault()
        const {purchaseValue, userMoney} = form
        const body = {
            purchaseValue,
            userMoney
        }

        axios.post("https://teste-kukac-trainee-back.herokuapp.com/challenge/troco-caixa", body)
        .then(res => {
            setResults(res.data.response)
            cleanFields()
        })
        .catch(error => {
            alert(error.response.data.message)
            cleanFields()
        })
    }

    const allBills = results.bills

    const billCount = 
        allBills && allBills.map((bill) => {
            return (
                <p>{bill}</p>
            )
        })

    return <EnunciadoDiv>
        <h3>
            Exercício 2:
        </h3> 
        <p>
        Escreva um algorítmo que mostre o usuário insira um valor de produto e outro de pagamento.
        Será mostrado: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco.
        </p>
        <Form onSubmit={sendData}>
            <Input 
                name="purchaseValue"
                placeholder="Valor da compra"
                type="number"
                onChange={onChangeInput}
                value={form.purchaseValue}
            />
            <Input
                name="userMoney"
                placeholder="Valor do pagamento"
                type="number"
                onChange={onChangeInput}
                value={form.userMoney}
            />
            <Button type="submit">
                Enviar
            </Button>
        </Form>
        <h3>
            Resultado:
        </h3>
            <ResultDiv>
                <p>Valor da compra: </p>{results.purchaseValue}
                <p>Valor do troco: </p>{results.purchaseExchange}
                <p>Notas do troco na sequência de 1, 10 e 100: {billCount}</p>
            </ResultDiv>
        
    </EnunciadoDiv>
}

export default Exercicio2