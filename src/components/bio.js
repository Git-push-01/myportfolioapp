import React from "react";
import { Card, Image } from "semantic-ui-react";
import hugoPic from "../images/hugoPic.jpeg";

const Bio = () => (
  <Card fluid={true} raised={true}>
    <Image size="small" src={hugoPic} centered />
    <Card.Content>
      <Card.Header>Hello, I'm Hugo Escandon</Card.Header>
      <Card.Header>Full-Stack Software Developer</Card.Header>
      <Card.Description>
        Team-oriented Full Stack Software Developer with a passion for
        developing creative business solutions. Using my background in Computer
        Science and experience in Operations, I bring adaptability to
        challenging environments, with a detail-oriented approach to problem
        solving. I have a collaborative work ethic and a strong desire to learn
        new technologies. I am eager to utilize my skills in Javascript, React,
        Redux, Ruby, and Rails to effectively deliver the goals that my employer
        has set out to reach.
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Bio;