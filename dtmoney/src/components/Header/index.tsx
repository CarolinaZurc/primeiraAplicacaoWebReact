import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header() {
    return (
        <>
            <Container>
                <Content>
                    <img src={logoImg} width="40px" height="40px"
                        alt="dt money" />
                    <button type="button">
                        Nova transação
                    </button>
                </Content>
            </Container>
        </>
    )
}