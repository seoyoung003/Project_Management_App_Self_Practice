import styled from "styled-components";
import React, { useState } from "react";

import noProject from "./assets/no-projects.png";
import SideBar from "./components/SideBar";
import InputProject from "./components/InputProject";
import NewProject from "./components/NewProject";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
  flex-grow: 1; /* 남은 공간을 차지 */
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #666a73;
  margin-top: 20px;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: lightslategray;
  margin-top: 20px;
`;

const SideBarContainer = styled.div`
 
  background-color: #2c2f33;
`;



function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "", 
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    
    setFormData((prevData) => {
      return{
        ...prevData,
        [name]: value,
      }
    });
  };
  const [currentScreen, setCurrentScreen] = useState("home"); // 현재 화면 상태

  const goToProjectInputForm = () => {
    setCurrentScreen("projectInputForm");
  };

  const goToHomeScreen = () => {
    setCurrentScreen("home");
  };

  const goToNewProject = () => {
    setCurrentScreen("newProject");
  };
  return (
    <div>
      <Wrapper>
        <SideBarContainer>
          <SideBar goToProjectInputForm={goToProjectInputForm} />
        </SideBarContainer>

        <MainContent>
        {currentScreen === "home" && (

          <div>
          
            <Img src={noProject} />

            <H1>No Project Selected</H1>
            <H2>Select a project or get started with a new one</H2>

          </div>
         
        )}

        {currentScreen === "projectInputForm" && 
        <InputProject 
          goToHomeScreen={goToHomeScreen} 
          formData={formData}
          handleInputChange={handleInputChange}
          goToNewProject={goToNewProject}
        />}

        
        {currentScreen === "newProject" && 
          <NewProject formData={formData}/>
        } 

        

        </MainContent>
      </Wrapper>
    </div>
  );
}

export default App;
