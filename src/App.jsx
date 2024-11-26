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

const generateId = () => {
  return Math.floor(Math.random() * 100);
};

function App() {

  const [newTask, setNewTask] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("null");
  const [formData, setFormData] = useState([
    {
      id: generateId(),
      title: "P1",
      description: "ppp",
      dueDate: "2024-12-31",
      task: ["Task1"],
    },
  ]);

 

  const addTask = (projectId) => {
    if (!newTask.trim()) return; // 공백 방지

    setFormData((prevData) =>
      prevData.map((project) =>
        project.id === projectId
          ? { ...project, task: [...project.task, newTask.trim()] }
          : project
      )
    );
    setNewTask(""); // 입력 필드 초기화
  };


  // 폼 입력값 변경 함수
  const handleInputChange = (e, id) => {
    const { name, value } = e.target;

    setFormData((prevData) =>
      prevData.map((project) =>
        project.id === id ? { ...project, [name]: value } : project
      )
    );
  };


  
  // 새로운 프로젝트 추가 함수
  const addNewProject = () => {
    const newId = generateId();
   
      const newProject = {
        id: newId,
        title: "",
        description: "",
        dueDate: "",
        task: [],
      };
      // 기존 formData 배열에 새로운 프로젝트 추가
      setFormData([...formData, newProject]);
    };
  

    const project = formData.find((p) => p.id === projectId)
 
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
          <SideBar
            formData={formData}
            goToProjectInputForm={goToProjectInputForm}
          />
        </SideBarContainer>

        <MainContent>
          {currentScreen === "home" && (
            <div>
              <Img src={noProject} />

              <H1>No Project Selected</H1>
              <H2>Select a project or get started with a new one</H2>
            </div>
          )}

          {currentScreen === "projectInputForm" && (
            <InputProject
              goToHomeScreen={goToHomeScreen}
              formData={formData}
              handleInputChange={handleInputChange}
              goToNewProject={goToNewProject}
              addNewProject={addNewProject}
              project={project}
            />
          )}

          {currentScreen === "newProject" && <NewProject addTask={addTask} formData={formData} />}
        </MainContent>
      </Wrapper>
    </div>
  );
}


export default App;
