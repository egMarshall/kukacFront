import { Button, Input, Form, EnunciadoDiv } from "./styled"

const Exercicio1 = () => {
    return <EnunciadoDiv>
        <h3>
            Exercício 1:
        </h3> 
        <p>
        Imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação.    
        </p>
        <Form>
            <Input placeholder="Primeiro Número"/>
            <Input placeholder="Segundo Número"/>
            <Button>
                Enviar
            </Button>
        </Form>
        <h3>
            Resultado:
        </h3>
        
    </EnunciadoDiv>
}

export default Exercicio1