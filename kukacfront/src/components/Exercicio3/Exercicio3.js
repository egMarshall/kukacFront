import { useState, useEffect } from "react"
import { Button, Input, Form, EnunciadoDiv } from "./styled"
import useForm from "../../Hooks/useForm"
import axios from "axios"
import { ResultDiv, GarageDiv } from "../Exercicio3/styled"

const Exercicio3 = () => {

    const initialForm = {
        model: "",
        yearOfManufacture: "",
        doors: "",
        brand: "",
        wheel: ""
    }

    const [results, setResults] = useState([])

    const [form, onChangeInput, cleanFields] = useForm(initialForm)

    useEffect(()=> {
        axios.get("https://teste-kukac-trainee-back.herokuapp.com/challenge/veiculos/mostrar")
        .then(response => {
            setResults(response.data)
        })
    }, [])

    const sendData = (event) => {
        event.preventDefault()
        const {model, yearOfManufacture, doors, brand, wheel} = form
        const body = {
            model,
            yearOfManufacture,
            doors,
            brand,
            wheel
        }

        axios.post("https://teste-kukac-trainee-back.herokuapp.com/challenge/veiculos/inserir", body)
        .then(res => {
            console.log(body)
            alert(`Veículo inserido na garagem com sucesso!`)
            cleanFields()
            axios.get("https://teste-kukac-trainee-back.herokuapp.com/challenge/veiculos/mostrar")
            .then(response => {
                setResults(response.data)
                cleanFields()
            })
        })
        .catch(error => {
            alert(error.response.data.message)
            cleanFields()
        })


    }

    const allVehicles = 
        results && results.map((vehicle) => {
            return (
            <GarageDiv>
                <p>Modelo: {vehicle.model}</p>
                <p>Marca: {vehicle.brand}</p>
                <p>Ano: {vehicle.yearOfManufacture}</p>
            </GarageDiv>
            )
        })

    return <EnunciadoDiv>
        <h3>
            Exercício 3:
        </h3> 
        <p>
        Preencha as informações sobre o seu veículo para enviá-lo à garagem.
        </p>
        <Form onSubmit={sendData}>
            <Input
                name="model" 
                placeholder="Modelo do Veículo"
                type="text"
                onChange={onChangeInput}
                value={form.model}
            />
            <Input
                name="yearOfManufacture" 
                placeholder="Ano de Fabricação"
                type="number"
                onChange={onChangeInput}
                value={form.yearOfManufacture}
            />
            <Input
                name="doors" 
                placeholder="Quantidade de Portas"
                type="number"
                onChange={onChangeInput}
                value={form.doors}
            />
            <Input
                name="brand" 
                placeholder="Marca"
                type="text"
                onChange={onChangeInput}
                value={form.brand}
            />
            <Input
                name="wheel" 
                placeholder="Quantidade de Rodas"
                type="number"
                onChange={onChangeInput}
                value={form.wheel}
            />
            <Button type="submit">
                Enviar
            </Button>
        </Form>
        <h3>
            Garagem:
        </h3>
        <ResultDiv>
            {allVehicles}
        </ResultDiv>
        
    </EnunciadoDiv>
}

export default Exercicio3