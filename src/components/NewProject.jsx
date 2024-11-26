import styled from "styled-components";

const Input = styled.input`
  border-radius: 3px;
  background-color: #d2d2d2;
  margin-right: 15px;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
`;

const InlineButton = styled.button`
  display: inline;
`;

export default function NewProject({ formData }) {
  return (
    <div>
      <ul>
        {formData.length > 0 && (
          <li key={formData.length - 1}>
            <H1>{formData[formData.length - 1].title}</H1>
            <InlineButton>Delete</InlineButton>

            <p>{formData[formData.length - 1].dueDate}</p>
            <p>{formData[formData.length - 1].description}</p>
            <hr />
          </li>
        )}
      </ul>
      <hr />

      <H1>Tasks</H1>
      <Input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={() => addTask(project.id)}>Add Task</button>
      <p>This project does not have any tasks yet.</p>
    </div>
  );
}
