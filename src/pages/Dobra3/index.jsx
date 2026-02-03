import imageDesktop from "../../assets/images/business-woman.png";
import moneyIcon from "../../assets/icons/money.svg";
import invoiceIcon from "../../assets/icons/invoice.svg";
import supportIcon from "../../assets/icons/support.svg";
import computerIcon from "../../assets/icons/computer.svg";
import certificationIcon from "../../assets/icons/certification.svg";
import imageMobile from "../../assets/images/business-woman-mob.png";
import { CardFeature } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";

import {
  Wrapper,
  Title,
  Content,
  Features,
  ButtonWrapper,
  ImageWrapper,
  BreakDesktop,
  BreakMobile,
} from "./styles";

const Dobra3 = () => {
  return (
    <Wrapper>
      <Title>
        Na contabilidade.com,
        <br />
        você tem planos a partir <br /> de <strong>R$ 159/mês</strong>, já com:
      </Title>

      <Content>
        <ImageWrapper>
          <picture>
            <source media="(min-width: 1024px)" srcSet={imageDesktop} />
            <img src={imageMobile} alt="Mulher trabalhando no computador" />
          </picture>
        </ImageWrapper>

        <Features>
          <CardFeature icon={moneyIcon} iconAlt="Abertura de empresa grátis">
            Abertura de empresa grátis <br />
            (sem taxas de honorários).
          </CardFeature>

          <CardFeature
            icon={certificationIcon}
            bg="lightGrey"
            iconAlt="Certificado digital"
          >
            Certificado digital incluso <br /> no 1º ano.
          </CardFeature>

          <CardFeature icon={invoiceIcon} bg="grey" iconAlt="Emissor de notas">
            Emissor de notas
            <BreakDesktop /> fiscais <BreakMobile /> integrado.
          </CardFeature>

          <CardFeature
            icon={computerIcon}
            bg="lightGreen"
            iconAlt="Plataforma contábil online"
          >
            Plataforma contábil online com fluxo <BreakDesktop /> de caixa,
            lançamentos, relatórios e <BreakMobile />
            controle de impostos.
          </CardFeature>

          <CardFeature
            icon={supportIcon}
            bg="green"
            iconAlt="Atendimento personalizado"
          >
            Atendimento personalizado <BreakDesktop />
            (WhatsApp, telefone, e-mail e vídeo)
          </CardFeature>
        </Features>
      </Content>

      <ButtonWrapper>
        <Button>Conheça os planos e preços</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Dobra3;
