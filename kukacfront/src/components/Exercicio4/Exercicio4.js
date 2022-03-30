import { Button, Input, Form, EnunciadoDiv, ResultDiv } from "./styled"
import useForm from "../../Hooks/useForm"
import { useState } from "react"
import axios from "axios"

const Exercicio4 = () => {
    const initialForm = {
        firstCep: "", 
        secondCep: "",
        thirdCep: "",
        fourfhCep: "", 
        fifthCep: ""
    }

    const [results, setResults] = useState([])

    const [form, onChangeInput, cleanFields] = useForm(initialForm)

    const sendData = (event) => {
        event.preventDefault()
        const {firstCep, secondCep, thirdCep, fourfhCep, fifthCep} = form
        const body = {
            ceps: [firstCep, secondCep, thirdCep, fourfhCep, fifthCep]
        }

        axios.post("https://teste-kukac-trainee-back.herokuapp.com/challenge/confere-cep", body)
        .then(res => {
            setResults(res.data.response)
            cleanFields()
        })        
        .catch(error => {
            alert(error.response.data.message)
            cleanFields()
        })

    }

    const AllAdresses = 
        results && results.map((address) => {
            if (address.erro) {
                return (
                    <p>Cep Inválido!</p>
                )
            } else {
                return (
                    <div>
                        <p>CEP: {address.cep}</p>
                        <p>Logradouro: {address.logradouro}</p>
                        <p>Bairro: {address.bairro}</p>
                        <p>Cidade: {address.localidade}</p>
                        <p>Estado: {address.estado}</p>
                    </div>
                )
            }
            
        })


    return <EnunciadoDiv>
        <h3>
            Exercício 4:
        </h3> 
        <p>
        Deve ser informado pelo usuário 5 CEP’s, e devolver os dados sobre esses CEP’s. 
        </p>
        <Form onSubmit={sendData}>
            <Input
                name="firstCep"
                placeholder="Insira o primeiro CEP"
                type="number"
                onChange={onChangeInput}
                value={form.firstCep}
            />
            <Input 
                name="secondCep"
                placeholder="Insira o segundo CEP"
                type="number"
                onChange={onChangeInput}
                value={form.secondCep}
            />
            <Input
                name="thirdCep" 
                placeholder="Insira o terceiro CEP"
                type="number"
                onChange={onChangeInput}
                value={form.thirdCep}
            />
            <Input
                name="fourfhCep"
                placeholder="Insira o quarto CEP"
                type="number"
                onChange={onChangeInput}
                value={form.fourfhCep}
            />
            <Input 
                name="fifthCep"
                placeholder="Insira o quinto CEP"
                type="number"
                onChange={onChangeInput}
                value={form.fifthCep}
            />
            <Button type="submit">
                Enviar
            </Button>
        </Form>
        <h3>
            Resultado:
        </h3>
        <ResultDiv>
            {AllAdresses}
        </ResultDiv>
        
    </EnunciadoDiv>
}

export default Exercicio4