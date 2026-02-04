import imageDesktop from "../../assets/images/business-woman.png";
import imageMobile from "../../assets/images/business-woman-mob.png";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { Button } from "../../components/Button/Button";
import { FEATURES } from "./mock/features";
import {
  Wrapper,
  Title,
  Content,
  Features,
  ButtonWrapper,
  ImageWrapper,
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
          {FEATURES.map(({ icon, bg, content }, index) => (
            <FeatureCard key={index} icon={icon} iconAlt={icon.title} bg={bg}>
              {content}
            </FeatureCard>
          ))}
        </Features>
      </Content>

      <ButtonWrapper>
        <Button onClick={() => console.log("clicked")}>
          Conheça os planos e preços
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Dobra3;
