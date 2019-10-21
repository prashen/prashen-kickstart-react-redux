import styled, {css} from 'styled-components';

export const Buttons = styled.button`
  background:lightgray;
  color:#000;
  border:0;
  padding:0.5rem;
  border-radius:0.3rem;
  transition:all 0.2s ease 0.1s;

  &:active {
    background:darkgray;
  }

  &:hover{
    background:darkgray;
    color:white;
  }

  &:focus {
    outline:0;
    box-shadow:none;
    border:0;
  }

  ${props => props.success && css`
    background:green;
    color:white;

    &:active {
      background:darkgreen;
    }

    &:hover {
      background:darkgreen;
    }

    
  `}
`;

// export const Buttons = styled(Button)`
//   background:lightgray;
//   color:#000;
//   border:0;

//   &:not(:disabled):not(.disabled):active {
//     background:darkgray;
//   }

//   &:hover{
//     background:darkgray;
//     color:white;
    
//   }

//   &:not(:disabled):not(.disabled):active:focus {
//     outline:0;
//     box-shadow:none;
//     border:0;
//   }
  
//   &:focus {
//     outline:0;
//     box-shadow:none;
//     border:0;
//   }


  

//   ${props => props.success && css`
//     background:green;
//     color:white;

//     &:not(:disabled):not(.disabled):active {
//       background:darkgreen;
//     }

//     &:hover {
//       background:darkgreen;
//     }

    
//   `}
// `;
