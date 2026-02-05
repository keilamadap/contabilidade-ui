import { useRef, useState } from 'react';
import {
  Wrapper,
  Title,
  Carousel,
  Dots,
  Track,
  DesktopLayout,
  CardsArea,
  Arrows,
} from './styles';
import { CarouselCard } from '../../components/CarouselCard/CarouselCard';
import { FEATURES } from './mock/features';

const CARD_WIDTH = 276;
const GAP = 24;

const Dobra5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef(0);

  const handleStart = (x) => {
    startX.current = x;
  };

  const handleEnd = (x) => {
    const diff = startX.current - x;

    if (diff > 50) {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }

    if (diff < -50) {
      setActiveIndex((prev) => (prev === 0 ? FEATURES.length - 1 : prev - 1));
    }
  };

  const next = () => {
    setActiveIndex((prev) => (prev === FEATURES.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    if (isFirst) return;
    setActiveIndex((prev) => prev - 1);
  };

  const isFirst = activeIndex === 0;

  return (
    <Wrapper>
      <DesktopLayout>
        <Title>
          Fatores que <br /> determinam quanto <br />
          você vai pagar
        </Title>

        <CardsArea>
          <Carousel
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
          >
            <Track
              style={{
                transform: `translateX(-${activeIndex * (CARD_WIDTH + GAP)}px)`,
              }}
            >
              {FEATURES.map((item, index) => (
                <CarouselCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  iconAlt={item.title}
                  description={item.description}
                />
              ))}
            </Track>
          </Carousel>
        </CardsArea>
      </DesktopLayout>
      <Arrows>
        <button aria-label="Slide anterior" onClick={prev} disabled={isFirst}>
          ‹
        </button>
        <button aria-label="Próximo slide" onClick={next}>
          ›
        </button>
      </Arrows>

      <Dots>
        {FEATURES.map((_, index) => (
          <button
            key={index}
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Dots>
    </Wrapper>
  );
};

export default Dobra5;
