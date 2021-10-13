import React from 'react';
import styled from 'styled-components';


export default function WarningFomr({...props}){
  return(
    
    <ContainerLabel>
      <LabelWarning {...props}>{props.children}</LabelWarning>
    </ContainerLabel>
    
  )
}

const LabelWarning = styled.label`
  color: red;
  margin:auto;
  

`;

const ContainerLabel = styled.div`
  border-top: 1px solid red;
  text-align: center;
`;