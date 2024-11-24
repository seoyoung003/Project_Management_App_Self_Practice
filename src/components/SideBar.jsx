import styled from "styled-components";


const Div = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top: 40px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 150px;
  height: 50px;
  background-color: gray;
  color:white;
  margin-top: 30px;
  &:hover {
    background-color: #D3D3D3 ;
  }
`;

export default function SideBar() {
  return (
    <Div>
      <H2>YOUR PROJECTS</H2>

      <Button onClick={goToProjectScreen}>+ Add Project</Button>
    </Div>
  );
}
