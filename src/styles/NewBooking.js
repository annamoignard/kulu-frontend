import styled from 'styled-components'

export const Form = styled.form`
display: flex;
  flex-direction: column;
  align-items: center;
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    label {
      font-size: large;
      margin-bottom: 5px;
    }
    input {
      height: 30px;
      font-size: 15px;
    }
    select {
      height: 40px;
      font-size: 15px;
    }
  }
  #submit {
    width: 80px;
    height: 20px;
    margin: 1px 0px;
  }
`;