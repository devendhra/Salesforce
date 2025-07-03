import Layout from '../components/Layout'
import Crm from '../components/Products/Crm'
import Customers from '../components/Products/Customers'
import Faq from '../components/Products/Faq'
import Hero from '../components/Products/Hero'
import Practices from '../components/Products/Practices'
import Skills from '../components/Products/Skills'
import Navbar from '../components/common/Navbar'

function Products() {
    
  return (
    <Layout>
        <Navbar />
        <Hero />
        <Customers />
        <Practices />
        <Skills />
        <Faq />
        <Crm />
    </Layout>
  )
}

export default Products