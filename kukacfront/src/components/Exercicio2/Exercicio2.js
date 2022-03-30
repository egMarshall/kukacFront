import { Button, Input, Form, EnunciadoDiv } from "./styled"

const Exercicio2 = () => {
    return <EnunciadoDiv>
        <h3>
            Exercício 2:
        </h3> 
        <p>
        Escreva um algoritmo que mostre o número mínimo de notas qmodeue o caixa deve fornecer como troco.
        Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco. Suponha que o sistema monetário não utilize moedas.
        O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.
        </p>
        <Form>
            <Input placeholder="Valor da compra"/>
            <Input placeholder="Valor do pagamento"/>
            <Button>
                Enviar
            </Button>
        </Form>
        <h3>
            Resultado:
        </h3>
        
    </EnunciadoDiv>
}

export default Exercicio2