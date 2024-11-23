import styled from "styled-components";

import noProject from "./assets/no-projects.png";
import SideBar from "./components/SideBar";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh; 
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
 
`;

const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #666A73;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: lightslategray;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 150px;
  height: 50px;
  background-color: #5C4033;
  color:white;

`;

function App() {
  return (
    <Div>
      <Img src={noProject} />

      <H1>No Project Selected</H1>
      <H2>Select a project or get started with a new one</H2>

      <Button>Create new project</Button>

      
    </Div>
  );
}

export default App;
