import React, { useContext } from 'react'
import { PageHeader, Button } from 'antd';
import { LoginOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Context } from '../../globalContext/globalContext';


export default function Header({
  label,
  item
}) {

  const {
    dispatch: { setToken },
  } = useContext(Context);

  let history = useHistory();

  function navigation(nav) {
    history.push(nav)
  }

  function Logo() {
    return (
      <LogoStyle
        onClick={() => navigation('/')}
      >
        Dasboard
      </LogoStyle>
    )
  }

  function LogOut() {
    setToken('')
    navigation('/auth')
  }



  return (
    <ContainerHeader>
      <PageHeader
        ghost={true}
        title={<Logo />}
        subTitle={label}
        avatar={{ src: 'https://img2.freepng.es/20180505/upw/kisspng-computer-icons-avatar-businessperson-interior-desi-corporae-5aee195c6d1683.4671087315255535004468.jpg' }}
        extra={[
          <>
            {
              !item &&
              <Button key="2"
                icon={<PlusOutlined />}
                onClick={() => navigation('/register')}
              >
                Add dashboard
              </Button>
          }

          </>,

          <Button
            key="1"
            type="primary"
            danger
            icon={<LoginOutlined />}
            onClick={() => LogOut()}

          >
            Log out
          </Button>,
        ]}
      >

      </PageHeader>

    </ContainerHeader>
  )
}

const ContainerHeader = styled.div`
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: #fff;
`


const LogoStyle = styled.label`
  font-size: 22px;
  cursor: pointer;
  
`
