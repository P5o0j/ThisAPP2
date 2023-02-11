//import "./card.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const Card2 = ({ car }) => {
  const { id, vrn, owner } = car;

  return (
    <>
      <Card maxW="sm" key={id} className="card-container">
        <CardBody>
          <Stack>
            <Heading size="md">{vrn.toLocaleUpperCase()}</Heading>
            <Text>{`${owner.firstName} ${owner.lastName}`}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Details
            </Button>
            <Button variant="ghost" colorScheme="blue">
              TBC
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Card2;
