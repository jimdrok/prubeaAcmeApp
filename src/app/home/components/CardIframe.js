import { PageHeader, Button, Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { QuestionCircleOutlined, FormOutlined , DeleteOutlined } from '@ant-design/icons'


export default function CardIframe({
  item,
  id,
  history,
  deleteItem
}) {


  function closeModal() {
    deleteItem(id)
  }

  function confirm() {
    Modal.confirm({
      title: 'Confirm',
      icon: <QuestionCircleOutlined />,
      content: `are you sure you want to delete ${item.title}?`,
      okText: 'Yes',
      cancelText1: 'No',
      onOk: closeModal
    });
  }

  return (
    <ContainerCard>
      <PageHeader
        ghost={false}
        title={item.title}
        extra={[
          <Button key="2"
            icon={<FormOutlined />}
            onClick={() => history.push(`/${id}`)}
          >
            Edit
          </Button>,

          <Button
            key="1"
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => confirm()}

          >
            Delete
          </Button>
        ]}
      >


      </PageHeader>

      <Iframe
        src={item.url}
      ></Iframe>
    </ContainerCard>
  )
}

const ContainerCard = styled.div`
  background-color: aliceblue;
  width: 95%;
  border: solid 1px #000;
  margin: auto;

  @media (max-width: 576px){
    width: 100%;
  }
  
`

const Iframe = styled.iframe`
  width: 100%;
  height: 350px;

`
