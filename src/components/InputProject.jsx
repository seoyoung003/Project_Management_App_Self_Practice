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

export default function InputProject() {
    return(
        <div>
            <Div>
                <button>Cancel</button>
                <button>Save</button>

                <label>TITLE</label>
                <input type="text" />

                <label>DESCRIPTION</label>
                <textarea></textarea>

                <label>DUE DATE</label>
                <input type="date" />
            </Div>
            
        </div>
    );
}