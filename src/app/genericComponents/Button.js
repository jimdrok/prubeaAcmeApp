import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';


export default function Button(props) {

  const antIcon = <LoadingOutlined style={{ fontSize: 24 } }spin />;
  return (
    <CustomButton {...props} >
      {props.loading === 'true' ? (<CustomLabel><SpinC indicator={antIcon} /></CustomLabel>) : (<CustomLabel {...props}  >{props.children}</CustomLabel>)}
    </CustomButton>
  )
}


const CustomButton = styled.button`
  width: 100%;
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  flex: 1;
  text-align: center;
  padding: 1px;
  background-color: ${(props) => props.backgroundColor ||  '#1890ff'};
  transition-duration: 0.4s;
  :hover{
    background-color: ${(props)=> props.hover};
    width: ${({widthHover}) => widthHover || '98%'};
  }

`;

const CustomLabel = styled.span`
  margin:auto;
  padding: 3px;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.color || '#000'};


`;


const SpinC = styled(Spin)`&&&{
  color: #fff;
}
  
`;
