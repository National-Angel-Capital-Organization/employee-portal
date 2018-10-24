import Head from 'next/head'
import Navbar from './navbar'

const Layout = (props) => (
  <div>
    <Head>
      <title>NACO Employee Portal</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
      <script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
    </Head>
    <Navbar />
    <div className="container">
    {props.children}
    </div>
  </div>
)

export default Layout