import moneyIcon from "../../../assets/icons/money.svg";
import invoiceIcon from "../../../assets/icons/invoice.svg";
import supportIcon from "../../../assets/icons/support.svg";
import computerIcon from "../../../assets/icons/computer.svg";
import certificationIcon from "../../../assets/icons/certification.svg";
import { BreakDesktop, BreakMobile } from "../styles";

export const FEATURES = [
  {
    icon: moneyIcon,
    content: (
      <>
        Abertura de empresa grátis <br />
        (sem taxas de honorários).
      </>
    ),
  },
  {
    icon: certificationIcon,
    bg: "lightGrey",
    content: (
      <>
        Certificado digital incluso <br /> no 1º ano.
      </>
    ),
  },
  {
    icon: invoiceIcon,
    bg: "grey",
    content: (
      <>
        Emissor de notas
        <BreakDesktop /> fiscais <BreakMobile /> integrado.
      </>
    ),
  },
  {
    icon: computerIcon,
    bg: "lightGreen",
    content: (
      <>
        Plataforma contábil online com fluxo <BreakDesktop /> de caixa,
        lançamentos, relatórios e <BreakMobile />
        controle de impostos.
      </>
    ),
  },
  {
    icon: supportIcon,
    iconAlt: "Atendimento personalizado",
    bg: "green",
    content: (
      <>
        Atendimento personalizado <BreakDesktop />
        (WhatsApp, telefone, e-mail e vídeo)
      </>
    ),
  },
];
