import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import axios from 'axios'

const handleGoogleSignIn = async () => {
  try {
    const CLIENT_ID = "587819817274-49gecl139ieio848n1i1hh9m8ri3ulic.apps.googleusercontent.com"
    const REDIRECT_URI = "https://auth.expo.io/@daniel.cmarques/promos-app"
    const SCOPE = encodeURI("profile email")
    const RESPONSE_TYPE = "token"

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

    WebBrowser.maybeCompleteAuthSession()

    const {
      type,
      params
    } = await AuthSession.startAsync({ authUrl })

    WebBrowser.maybeCompleteAuthSession()

    if (type === 'success') {
      const res = await axios({
        method: 'post',
        url: `https://usat5wglha.execute-api.us-east-1.amazonaws.com/promos/oauth?access_token=${params.access_token}`,
      })

      return res.data
    }

    return type

  } catch (error) {
    console.log(error)
  }
}

export default handleGoogleSignIn
