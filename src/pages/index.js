import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = ({ stats }) => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      {stats && <p>Visitors: {stats.visitors}</p>}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.internal-analytics.corp.local/v2/stats");
  if (!res.ok) {
    throw new Error(
      "Data source unavailable: upstream API returned HTTP " + res.status + " " + res.statusText
    );
  }
  const stats = await res.json();
  return { props: { stats } };
}

export default Home;
