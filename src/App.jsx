import styled from "styled-components";
import React, { useState } from "react";

import noProject from "./assets/no-projects.png";
import SideBar from "./components/SideBar";

const Div = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1; /* 남은 공간을 차지 */
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #666A73;
  margin-top: 20px;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: lightslategray;
  margin-top: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 150px;
  height: 50px;
  background-color: #5C4033;
  color:white;
  margin-top: 20px;
  &:hover {
    background-color: green;
  }
`;

function App() {

  const [currentScreen, setCurrentScreen] = useState("home"); // 현재 화면 상태

  const goToProjectScreen = () => {
    setCurrentScreen("project");
  };

  const goToHomeScreen = () => {
    setCurrentScreen("home");
  };
  return (
    <Div>
      <SideBar/>

      <MainContent>
        <Img src={noProject} />

        <H1>No Project Selected</H1>
        <H2>Select a project or get started with a new one</H2>

      </MainContent>

      {currentScreen === "home" && (
        <div>
          
          <button onClick={goToProjectScreen}>Go to Project</button>
        </div>
      )}

      {currentScreen === "project" && (
        <InputProject/>
      )}
    </Div>


      

    
  );
}

export default App;
