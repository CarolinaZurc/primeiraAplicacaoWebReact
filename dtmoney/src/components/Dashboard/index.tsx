import { Container } from "./styles";

import { Summary } from '../Summary/index';
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
    return (
        <Container>
            <h1> ola</h1>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}