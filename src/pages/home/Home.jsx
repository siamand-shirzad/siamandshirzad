import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import About from './About';
import Hero from './Hero';
import Services from './Services';

const Home = () => {
  const location = useLocation()
  const refs = {
    hero: useRef(null),
    about: useRef(null),
    services: useRef(null)
  };
  const { hero, about, services } = refs;
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);

      const targetRef = refs[id];

      targetRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- refs is rebuilt each render but the ref objects themselves are stable
  }, [location]);

  return (
    <>
      <Hero innerRef={hero} />
      <About innerRef={about} />
      <Services innerRef={services} />
    </>
  );
};

export default Home;
