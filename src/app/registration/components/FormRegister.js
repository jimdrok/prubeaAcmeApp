import React from 'react'
import Button from '../../genericComponents/Button'
import { Col, Row, Input } from 'antd';
import { ConterText, FormAuth, Text } from '../../genericComponents/goblalStyled';
import WarningFomr from '../../genericComponents/WarningForm';


export default function FormRegister({
  loadingRegister,
  handleSubmit,
  values,
  setFieldValue,
  touched,
  setFieldTouched,
  errors,
  history
}) {
  return (
    <>
      <Row justify="center">
        <Col xs={22} sm={20} md={14} ld={12} xl={10}>
          <FormAuth onSubmit={handleSubmit} >
            <Row justify="center">
              <Col span={10}>
                <ConterText>
                  <Text>To register</Text>
                </ConterText>
              </Col>
            </Row><br />

            <Row gutter={[0, 20]} justify="center">
              <Col xs={22} md={18}>
                <Text>Title</Text>
                <Input

                  placeholder="title"
                  value={values.title}
                  onChange={(e) => setFieldValue('title', e.target.value)}
                  onBlur={() => setFieldTouched('title', true)}

                />
                {errors.title && touched.title && (<WarningFomr>{errors?.title}</WarningFomr>)}
              </Col><br />

              <Col xs={22} md={18}>
                <Text>Url</Text>
                <Input

                  placeholder="url"
                  value={values.url}
                  onChange={(e) => setFieldValue('url', e.target.value)}
                  onBlur={() => setFieldTouched('url', true)}

                />
                {errors.url && touched.url && (<WarningFomr>{errors?.url}</WarningFomr>)}
              </Col><br />
              

            </Row><br /><br /><br />
            <Row gutter={[10, 4]} justify="center">
              <Col xs={6} sm={8} md={6} >
                <Button
                  type='submint'
                  color={'#fff'}
                  loading={loadingRegister ? 'true' : 'false'}

                >Save</Button>
              </Col>
              <Col xs={6} sm={8} md={6} >
                <Button
                  color={'#fff'}
                  backgroundColor={'#fe5151'}
                  onClick={
                    ()=>{
                      history.push('/')
                    }
                  }

                >Cancel</Button>
              </Col>

            </Row><br /><br />
          </FormAuth>
        </Col>
      </Row>
    </>
  )
}
