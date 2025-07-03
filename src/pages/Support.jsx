import Navbar2 from '../components/common/Navbar2'
import Layout from '../components/Layout'
import Hero from '../components/Support/Hero'
import Longtermsuccess from '../components/Support/Longtermsuccess'
import Professionalservice from '../components/Support/Professionalservice'
import SecondaryHeader from '../components/Support/SecondartHeader'
import Successorganization from '../components/Support/Successorganization'
import Successplans from '../components/Support/Successplans'
import Rating from '../components/Support/Rating'
import CustomerInsight from '../components/Support/CustomerInsight'
import Faq from '../components/Support/Faq'

function Support() {
  return (
    <Layout>
        <Navbar2 />
        <SecondaryHeader />
        <Hero />
        <Successorganization />
        <Longtermsuccess />
        <Successplans />
        <Professionalservice />
        <Rating />
        <CustomerInsight />
        <Faq />
    </Layout>
  )
}

export default Support