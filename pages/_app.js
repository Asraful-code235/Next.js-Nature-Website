import '../styles/globals.css';
import Layout from '../components/Layout';
import 'react-modern-drawer/dist/index.css';
import { ContextProvider } from '../ContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
