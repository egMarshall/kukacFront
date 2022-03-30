import { Button, Input, Form, EnunciadoDiv, ResultDiv } from "./styled"
import axios from "axios"
import useForm from "../../Hooks/useForm"
import { useState } from "react"

const Exercicio1 = () => {

    const initialForm = {
        firstNumber: "",
        secondNumber: ""
    }

    const [results, setResults] = useState([])

    const [form, onChangeInput, cleanFields] = useForm(initialForm)

    const sendData = (event) => {
        event.preventDefault()
        const {firstNumber, secondNumber} = form
        const body = {
            firstNumber,
            secondNumber
        }

         axios.post("https://teste-kukac-trainee-back.herokuapp.com/challenge/palindromos", body)
        .then(res => {
            setResults(res.data.response)
            cleanFields()
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const exerciseResult = 
        results.map((result) => {
            return (
                <p>{result}</p>
            )
    })

    return <EnunciadoDiv>
        <h3>
            Exercício 1:
        </h3> 
        <p>
        Imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação.    
        </p>
        <Form onSubmit={sendData}>
            <Input
                name="firstNumber" 
                placeholder="Primeiro Número"
                type="number"
                onChange={onChangeInput}
                value={form.firstNumber}
            />
            <Input 
                name="secondNumber" 
                placeholder="Segundo Número"
                type="number"
                onChange={onChangeInput}
                value={form.secondNumber}
            />
            <Button type="submit">
                Enviar
            </Button>
        </Form>
        <h3>
            Resultado:
        </h3>
            <ResultDiv>
                {exerciseResult}
            </ResultDiv>
    </EnunciadoDiv>
}

export default Exercicio1