import { Card, Icon, Text } from "./styles";

export const CardFeature = ({ icon, children, bg, iconAlt }) => {
  return (
    <Card bg={bg}>
      <Icon src={icon} alt={iconAlt} />

      <Text>{children}</Text>
    </Card>
  );
};
