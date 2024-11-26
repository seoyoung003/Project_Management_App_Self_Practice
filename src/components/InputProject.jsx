import styled from "styled-components";

const Div = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Cancel = styled.button`
  width: 150px;
  height: 50px;
  color: black;
`;

const Save = styled.button`
  border-radius: 10px;
  width: 150px;
  height: 50px;
  background-color: #333;
  color: white;
  margin-left: 30px;
  &:hover {
    background-color: #d3d3d3;
  }
`;

const Input = styled.input`
  border-radius: 3px;
  background-color: #d2d2d2;
`;

const TextArea = styled.textarea`
  border-radius: 3px;
  background-color: #d2d2d2;
`;

export default function InputProject({
  goToHomeScreen,
  handleInputChange,
  formData,
  goToNewProject,
  addNewProject,
}) {
  return (
    <div>
      <Cancel onClick={goToHomeScreen}>Cancel</Cancel>
      <Save
        onClick={() => {
          goToNewProject();
          addNewProject();
        }}
      >
        Save
      </Save>
      <Div>
        <label>TITLE</label>
        <Input
          type="text"
          onChange={(e) => handleInputChange(e, project.id)}
          name="title"
          value={formData.title}
        />

        <label>DESCRIPTION</label>
        <TextArea
          onChange={(e) => handleInputChange(e, project.id)}
          name="description"
          value={formData.description}
        ></TextArea>

        <label>DUE DATE</label>
        <Input
          type="date"
          onChange={(e) => handleInputChange(e, project.id)}
          name="dueDate"
          value={formData.dueDate}
        />
      </Div>
    </div>
  );
}
