import { Button, Input, Form, EnunciadoDiv } from "./styled"

const Exercicio3 = () => {
    return <EnunciadoDiv>
        <h3>
            Exercício 3:
        </h3> 
        <p>
        Preencha as informações sobre o seu veículo para enviá-lo à garagem.
        </p>
        <Form>
            <Input placeholder="Modelo do Veículo"/>
            <Input placeholder="Ano de Fabricação"/>
            <Input placeholder="Quantidade de Portas"/>
            <Input placeholder="Marca"/>
            <Input placeholder="Quantidade de Rodas"/>
            <Button>
                Enviar
            </Button>
        </Form>
        <h3>
            Garagem:
        </h3>
        
    </EnunciadoDiv>
}

export default Exercicio3