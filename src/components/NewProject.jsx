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

const InlineWrapper = styled.div`
  display: inline;
  
`;



export default function NewProject({formData}) {
    return(
        <div>
            <InlineWrapper>
            <H1>{formData.title}</H1>
            <button>Delete</button>
            </InlineWrapper>

            <p>{formData.dueDate}</p>
            <br />
            <p>{formData.description}</p>

            <hr />

            <H1>Tasks</H1>
            <Input type="text" />
            <button>Add Task</button>
            <p>This project does not have any tasks yet.</p>

            


        </div>
    );
}