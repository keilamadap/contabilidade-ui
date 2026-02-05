import { Card, Icon, Text, Description } from './styles';

export const CarouselCard = ({ title, icon, iconAlt, description }) => {
  return (
    <Card>
      <Icon>
        <img src={icon} alt={iconAlt} />
      </Icon>

      <Text>
        {title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </Text>

      {description && (
        <Description>
          {description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </Description>
      )}
    </Card>
  );
};
