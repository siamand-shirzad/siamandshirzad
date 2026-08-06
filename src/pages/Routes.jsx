import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contactMe/ContactMe';
import Projects from './projects/Index';
import SpeedInsights from './docs/SpeedInsights';
import ScrollToTop from '../components/ui/ScrollToTop';

const Content = () => {
  return (
    <div className=' mt-28 md:w-[80%] w-[90%] mx-auto  '>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/docs/speed-insights" element={<SpeedInsights />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Content;
