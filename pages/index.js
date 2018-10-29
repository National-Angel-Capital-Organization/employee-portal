import Layout from '../components/layout'
import nookies from 'nookies'

const Index = (props) => (
  <Layout>
    <div>
      <h1>NACO Employee Portal</h1>
    </div>
  </Layout>
)

Index.getInitialProps = async (ctx) => {
  await nookies.set(ctx, 'token', '123456')

  let cookies = await nookies.get(ctx)
  if(cookies.token) {
  console.log('hello')
  }
  return {
    hello: 'world',
    cookies: cookies
  }
}

export default Index