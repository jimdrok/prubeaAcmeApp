import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { RegisterSchema } from '../../../helpers/validationSchema';
import Header from '../../genericComponents/Header'
import FormRegister from '../components/FormRegister'
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import database from '../../../helpers/initializeFirebase';
import { notification } from 'antd';
import { useHistory, useParams } from 'react-router';
import CusttomSkeleton from '../../genericComponents/CusttomSkeleton';
import Footer from '../../genericComponents/Footer';



export default function RegistrationScreen() {
  const [loading, setloading] = useState(false)
  const [loadingInfo, setLoadingInfo] = useState(true)
  const { id } = useParams();
  let history = useHistory();
  const {
    handleSubmit,
    values,
    setFieldValue,
    touched,
    setFieldTouched,
    errors,
  } = useFormik({
    initialValues: {
      title: '',
      url: '',
    },
    onSubmit,
    validationSchema: RegisterSchema
  });

  async function getDashboard() {

      const ref = doc(database, 'ListDasboard', `${id}`)
      const query = await getDoc(ref)
      setFieldValue('title', query?.data().title || '')
      setFieldValue('url', query?.data().url || '')
    
  }

  useEffect(() => {
    if(id){
      getDashboard()
    }
    
    setLoadingInfo(false)
  }, [])

  async function onSubmit(value) {
    setloading(true)
    const {
      title,
      url,
    } = value

    if (id) {
      await setDoc(doc(database, 'ListDasboard', `${id}`), {
        title: title,
        url: url,
      });
    } else {
      try {
        await addDoc(collection(database, "ListDasboard"), {
          title: title,
          url: url,
        });


        notification.success({
          message: `Dashboard ${title} successfully registered`
        });


      } catch (e) {
        notification.error({
          message: 'an unexpected error has occurred please try again'
        })

      }
    }


    setloading(false)
    history.push('/')
  }
  return (
    <div>
      <Header
        label={id ? 'Edit' : 'Registration'}
        item={id}
      />
      {
        loadingInfo

          ? <>
            <CusttomSkeleton />
          </>

          : <>

            <FormRegister
              handleSubmit={handleSubmit}
              values={values}
              setFieldTouched={setFieldTouched}
              touched={touched}
              errors={errors}
              setFieldValue={setFieldValue}
              loadingRegister={loading}
              history={history}
            />
          </>
      }
      <Footer  />

    </div>
  )
}
