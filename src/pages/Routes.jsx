import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import ScrollToTop from '../components/ui/ScrollToTop';

const Contact = lazy(() => import('./contactMe/ContactMe'));
const Projects = lazy(() => import('./projects/Index'));

const Content = () => {
  return (
    <div className=' mt-28 md:w-[80%] w-[90%] mx-auto  '>
      <ScrollToTop/>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Content;
