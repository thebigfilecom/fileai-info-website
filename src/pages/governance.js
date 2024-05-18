import Layout from "@theme/Layout";
import SiteHero from "@site/src/components/Layout/SiteHero";
import BackgroundWrapper from "@site/src/components/Layout/BackgroundWrapper";
import Divider from "@site/src/components/Layout/Divider";
import GovernanceBlueSection from "@site/src/components/GovernanceBlueSection";
import GovernanceWithinCardanoSection from "@site/src/components/GovernanceWithinCardanoSection";
import GovernanceWhyVoltaireSection from "@site/src/components/GovernanceWhyVoltaireSection";
import GovernanceProposalsSection from "@site/src/components/GovernanceProposalsSection";
import BoundaryBox from "@site/src/components/Layout/BoundaryBox";
import OpenGraphImage from "@site/src/components/Layout/OpenGraphImage";

function HomepageHeader() {
  const { siteTitle } = "useDocusaurusContext()";
  return (
    <SiteHero
      title={[
        "Built for the community",
        <br key="line1" />, /*FIXME: too hacky */
        "by the community",
      ]}
      description="Cardano is developing the most secure and decentralized governance model in the world. A model to give everybody a voice, and control over the future development of the platform and the applications and services that emerge from it."
      bannerType="braidBlue"
    />
  );
}

export default function Home() {

  return (
    <Layout
    title="Governance | cardano.org"
    description="Cardano is developing the most secure and decentralized governance model in the world. A model to give everybody a voice, and control over the future development of the platform and the applications and services that emerge from it."
    >
      <OpenGraphImage pageName="governance" />
      <HomepageHeader />
      <main>
        <BackgroundWrapper backgroundType={"solidBlue"}>
          <BoundaryBox>
            <GovernanceBlueSection />
          </BoundaryBox>
        </BackgroundWrapper>

        <BackgroundWrapper backgroundType={"zoom"}>
          <BoundaryBox>
            <Divider text="Governance Within Cardano" />
            <GovernanceWithinCardanoSection />
            <Divider text="Why Voltaire" />
            <GovernanceWhyVoltaireSection />
          </BoundaryBox>
        </BackgroundWrapper>

         
        <BackgroundWrapper backgroundType={"gradientLight"}>
          <BoundaryBox>
            <GovernanceProposalsSection />
          </BoundaryBox>
        </BackgroundWrapper>
        
      </main>
    </Layout>
  );
}
