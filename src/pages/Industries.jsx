import Layout from '../components/Layout'
import Navbar2 from '../components/common/Navbar2'
import SecondryHeader from '../components/Industries/SecondryHeader'
import Hero from '../components/Industries/Hero'
import Customers from '../components/Industries/Customers'
import Hospitality from '../components/Industries/Hospitality'
import Travel from '../components/Industries/Travel'
import Portfolio from '../components/Industries/Portfolio'
import Roi from '../components/Industries/Roi'
import Conversations from '../components/Industries/Conversations'
import Faq from '../components/Industries/Faq'

function Industries() {
  return (
    <Layout>    
        <Navbar2 />
        <SecondryHeader />
        <Hero />
        <Customers />
        <Hospitality />
        <Travel />
        <Portfolio />
        <Roi />
        <Conversations />
        <Faq />
    </Layout>
  )
}

export default Industries