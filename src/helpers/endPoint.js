import axios from "axios";

export async function loginToken(values){
  const {
    user,
    password
  } = values

  const token = await axios.post(
    'https://webhooks.multifiber.cl/api/v1/auth/obtain_token/' ,
      {
        "username": user,
        "password": password
      }
  )

  return (
    token.data.token
  )
}