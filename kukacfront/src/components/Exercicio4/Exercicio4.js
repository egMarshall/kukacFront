import { Button, Input, Form, EnunciadoDiv } from "./styled"

const Exercicio4 = () => {
    return <EnunciadoDiv>
        <h3>
            Exercício 4:
        </h3> 
        <p>
        Deve ser informado pelo usuário 5 CEP’s, e devolver os dados sobre esses CEP’s. 
        </p>
        <Form>
            <Input placeholder="Insira o primeiro CEP"/>
            <Input placeholder="Insira o segundo CEP"/>
            <Input placeholder="Insira o terceiro CEP"/>
            <Input placeholder="Insira o quarto CEP"/>
            <Input placeholder="Insira o quinto CEP"/>
            <Button>
                Enviar
            </Button>
        </Form>
        <h3>
            Resultado:
        </h3>
        
    </EnunciadoDiv>
}

export default Exercicio4