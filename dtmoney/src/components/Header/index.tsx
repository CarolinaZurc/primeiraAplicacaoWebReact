import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <>
            <Container>
                <Content>
                    <img src={logoImg} width="40px" height="40px"
                    alt="dt money"
                    />
                    <h1 className="titulo">dt money</h1>
                    <button type="button" onClick={onOpenNewTransactionModal} >
                        Nova transação
                    </button>
                </Content>
            </Container>
        </>
    )
}