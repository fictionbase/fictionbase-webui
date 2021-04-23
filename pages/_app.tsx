import '../styles/global.css'
import { AppProps } from 'next/app'
import Amplify from "aws-amplify";
import awsExports from "../src/aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure(awsExports);

export function App({ Component, pageProps }: AppProps) {
  const AuthedComponent = withAuthenticator(Component, pageProps)
  return <AuthedComponent {...pageProps} />
}

export default App
