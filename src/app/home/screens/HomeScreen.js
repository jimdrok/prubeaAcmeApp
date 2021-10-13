import React, { useEffect, useState } from 'react'
import { Col, Row,  } from 'antd';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import database from '../../../helpers/initializeFirebase';
import Header from '../../genericComponents/Header';
import CardIframe from '../components/CardIframe';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import CusttomSkeleton from '../../genericComponents/CusttomSkeleton';
import Footer from '../../genericComponents/Footer';

export default function HomeScreen() {
  let history = useHistory();
  const [dataQuery, setDataQuery] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getDashboard = async () => {
      const query = await getDocs(collection(database, 'ListDasboard'));
      setDataQuery(query.docs)
      setLoading(false)
    }

    getDashboard();
  }, [dataQuery])

  async function deleteItem(id) {
    await deleteDoc(doc(database, 'ListDasboard', `${id}`));
  }

  return (
    <>
      <Header label={'Home'} />
      {
        loading
          ? <>
            <CusttomSkeleton/>
          </>
          : <>

            <Container>
              <Row justify="center" gutter={[0, 30]}>
                {
                  dataQuery?.map((doc) => {
                    return (
                      <Col xs={20} sm={20} md={10} lg={10} xl={11}>
                        <CardIframe
                          item={doc.data()}
                          id={doc.id}
                          history={history}
                          deleteItem={deleteItem}
                        />
                      </Col>
                    )

                  })
                }
              </Row>
            </Container>

          </>
      }

      <Footer />
    </>
  )
}

const Container = styled.div`
  width: '98%';
  margin: auto;
  padding: 10% 0 5% 0;
  @media (max-width: 800px){
    padding: 15% 0 3% 0;
  }

  @media (max-width: 500px){
    padding: 40% 0 3% 0;
  }
`

