import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="djmoney" />
        <button>Nova Transação</button>
      </Content>
    </Container>
  );
};
