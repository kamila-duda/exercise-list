import React, { useState, useEffect } from "react";
import { Container } from "../src/components/Container.styled";
import SideBar from "../src/components/SideBar/SideBar";
import Exercises from "../src/components/Exercises/Exercises";
import SingleExercise from "../src/components/SingleExecises/SingleExercise";
import Wave from "./assets/wave-gray.svg";
import Wave2 from "./assets/wave-gray2.svg";
import styled from "styled-components";
import { exercises } from "./exercises";

const Image = styled.img`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100%;
`;

function App() {
  const [sections, setSections] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!isLoad) {
      setIsLoad(true);
    }
  }, [isLoad]);

  useEffect(() => {
    if (!isLoad) {
      exercises.map((exercise, index) => {
        return setSections((sections) => {
          return [...sections, { scrollTo: `exercise${index}` }];
        });
      });
    }
  }, [isLoad]);

  return (
    <Container>
      <SideBar sections={sections} />
      <Exercises>
        {exercises.map((exercise, index) => (
          <SingleExercise
            name={`exercise${index}`}
            key={index}
            number={index + 1}
            codes={exercise.codes}
            description={exercise.description}
          />
        ))}
      </Exercises>
      <Image src={Wave2} alt="svg wave" />
      <Image src={Wave} alt="svg wave" />
    </Container>
  );
}

export default App;
