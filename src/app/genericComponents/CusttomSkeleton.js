import { Skeleton } from 'antd'
import React from 'react'
import styled from 'styled-components'

export default function CusttomSkeleton() {
  return (
    <Container>
      <Skeleton active/>
      <Skeleton active/>

    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 300px;
  margin:  auto ;
  padding: 10% 25%;
  z-index: 1;

  @media (max-width: 800px){
    padding: 15% 10%;
  }

  @media (max-width: 500px){
    padding: 30% 10%;
  }

`
