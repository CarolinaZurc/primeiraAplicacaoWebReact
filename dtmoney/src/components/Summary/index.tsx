import React, { useContext } from 'react';
import setaCima from '../../assets/setaCima.svg';
import setaBaixo from '../../assets/setaBaixo.svg';
import cifrao from '../../assets/cifrao.svg';

import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    console.log(transactions)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p> 
                    <img src={setaCima}
                        width="20px" height="20px"
                        alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={setaBaixo}
                        width="20px" height="20px"
                        alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={cifrao}
                        width="20px" height="20px"
                        alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container >
    )
}