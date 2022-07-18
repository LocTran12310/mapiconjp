import 'tailwindcss/tailwind.css'
import '../../styles/globals.css'
import useAuth from '../hooks/useAuth';

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.Layout || EmptyLayout;
  useAuth();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

const EmptyLayout = (props: { children: React.ReactElement }) => {
  return <>{props.children}</>;
};
export default MyApp
