import React, { useState } from "react";
import "../card/card.scss";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/react";
import CardDetail from "../card-detail/card-detail";
import CarDetail from "../car-detail/car-detail.component";

const Card2 = ({ car }) => {
  const { id, vrn, owner } = car;

  const productDetails = (car) => {
    <CardDetail car2={car} />;
    console.log("clicked");
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
            {/* <Link to="">
              <Button
                variant="solid"
                colorScheme="blue"
                name="Details"
                value={"Det"}
                onClick={productDetails}
              >
                Details
              </Button>
            </Link> */}
            <input
              type="button"
              value="Details"
              onClick={togglePopup}
              className="details-button"
            />
            {isOpen && <CarDetail car2={car} handleClose={togglePopup} />}
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
