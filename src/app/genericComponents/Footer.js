import React from 'react'
import styled from 'styled-components'

export default function Footer({
  props
}) {
  return (
    <Container {...props}>
      <LabelFooter>By: Pedro Jimenez</LabelFooter>
    </Container>
  )
}

const Container = styled.div`
  position:fixed;
  left:0px;
  bottom:0px;
  height:30px;
  width:100%;
  background:#999;
`

const LabelFooter = styled.label`
  color: #fff;
  padding: 5px;
  
`
