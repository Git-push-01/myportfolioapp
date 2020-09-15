import React from "react";
import { Card, Image } from "semantic-ui-react";
import dogBarksLogo from "../images/dogBarksLogo.jpg";

const DogBarksDemo = () => (
  <Card fluid={true} raised={true}>
    <Card.Content  textAlign='center'>
      <Card.Header>Dog-Barks</Card.Header>
    Geolocation app that allows user to locate the nearest dog park
    </Card.Content>

      <Image

        src={dogBarksLogo}
        centered
        fluid={true}
        rounded
        href=""
        target="_blank"
      />

  </Card>
);

export default DogBarksDemo;
