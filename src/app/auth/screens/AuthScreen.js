import React, { useState, useContext } from 'react'
import { Col, Row, Input , notification } from 'antd';
import { Text, FormAuth, ConterText } from '../../genericComponents/goblalStyled';
import Button from '../../genericComponents/Button';
import { useFormik } from 'formik';
import { AuthSchema } from '../../../helpers/validationSchema';
import WarningFomr from '../../genericComponents/WarningForm';
import { loginToken } from '../../../helpers/endPoint';
import { Context } from '../../../globalContext/globalContext';
import { useHistory } from 'react-router';

export default function AuthScreen() {
  let history = useHistory();
  const [loadingLogin, setLoadingLogin] = useState(false)
  const {
    handleSubmit,
    values,
    setFieldValue,
    touched,
    setFieldTouched,
    errors,
  } = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    onSubmit,
    validationSchema: AuthSchema
  });

  const {
    dispatch:{setToken},
  } = useContext(Context);

  async function onSubmit(values) {
    setLoadingLogin(true)
    
    try {
      const getToken = await loginToken(values)
      setLoadingLogin(false)
      setToken(getToken)
      history.push('/')
    }
    catch{
      notification.error({
        message: 'Usuario y Contraseña no coiciden'
      });
      setLoadingLogin(false)

    }
  }
  return (

    <>
      <Row justify="center">
        <Col xs={22} sm={18} md={12} ld={10} xl={7}>
          <FormAuth onSubmit={handleSubmit} >
            <Row justify="center">
              <Col span={10}>
                <ConterText>
                  <Text>Sign In</Text>
                </ConterText>
              </Col>
            </Row><br />

            <Row gutter={[0, 20]} justify="center">
              <Col xs={22} md={18}>
                <Text>User</Text>
                <Input

                  placeholder="user"
                  value={values.user}
                  onChange={(e) => setFieldValue('user', e.target.value)}
                  onBlur={() => setFieldTouched('uaer', true)}

                />
                {errors.user && touched.user && (<WarningFomr>{errors?.user}</WarningFomr>)}
              </Col><br />
              <Col xs={22} md={18}>
                <Text>Password</Text>
                <Input.Password

                  placeholder="***********"
                  value={values.password}
                  onChange={(e) => setFieldValue('password', e.target.value)}
                  onBlur={() => setFieldTouched('password', true)}

                />
                {errors.password && touched.password && (<WarningFomr>{errors?.password}</WarningFomr>)}
              </Col>
            </Row><br /><br /><br />
            <Row gutter={[0, 4]} justify="center">
              <Col xs={10} sm={10} md={8} >
                <Button
                  type='submint'
                  color={'#fff'}
                  loading={loadingLogin ? 'true' : 'false'}

                >Sign In</Button>
              </Col>

            </Row><br /><br />
          </FormAuth>
        </Col>
      </Row>
    </>
  )
}


