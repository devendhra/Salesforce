import Navbar2 from "../components/common/Navbar2"
import AgentsForImpact from "../components/Impact/Agents"
import Ceo from "../components/Impact/Ceo"
import Hero from "../components/Impact/Hero"
import Impactcomp from "../components/Impact/Impactcomp"
import SecondaryHeader from "../components/Impact/SecondaryHeader"
import Stakeholder from "../components/Impact/Stakeholder"
import TakeActionSection from "../components/Impact/Takeaction"
import Layout from "../components/Layout"

function Impact() {
  return (
    <Layout>
      <Navbar2 />  
      <SecondaryHeader />  
      <Hero />  
      <Impactcomp />  
      <Stakeholder />  
      <AgentsForImpact />  
      <TakeActionSection />  
      <Ceo />  
    </Layout>
  )
}

export default Impact