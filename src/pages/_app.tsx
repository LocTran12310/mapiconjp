import 'tailwindcss/tailwind.css'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.Layout || EmptyLayout;
  
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
