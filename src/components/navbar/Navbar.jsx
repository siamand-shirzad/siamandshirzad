import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Glass from '../ui/Glass';
import MobileNavbar from './MobileNavbar';
import { useModalStore } from '@/context/modalStore';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const isOpen = useModalStore(state => state.isOpen);
  const closeModal = useModalStore(state => state.closeModal);
  const toggleModal = useModalStore(state => state.toggleModal);

  return (
    <>
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]  transition-opacity"></div>
      )}

      <header className="header fixed top-0 left-0 right-0 z-50">
        <Glass className="w-[85%] md:w-[70%]  mx-auto mt-6 px-6 border border-gray-700/50 text-white">
          <motion.div
            animate={{ height: isOpen ? '20rem' : '4rem' }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            className={`max-w-7xl mx-auto  
        `}>
            <div className="flex items-center justify-between gap-5 h-16">
              <div onClick={closeModal} className="nav-left">
                <Link to="/#hero" className="flex items-center gap-1 group">
                  <img
                    src="/s-icon.png"
                    alt="Siamand Logo"
                    className="h-10 w-10 object-contain drop-shadow-lg transition-transform duration-500 group-hover:rotate-12"
                  />

                  <div className="flex flex-col leading-tight">
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      Siamand
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 tracking-widest uppercase -mt-1 group-hover:text-white transition-colors">
                      Developer
                    </span>
                  </div>
                </Link>
              </div>{' '}
              <nav className="nav-center text-lg tracking-tight hidden md:flex  gap-8">
                <Link to="/#hero" className="nav-link">
                  Home
                </Link>
                <Link to="/#about" className="nav-link">
                  About
                </Link>
                <Link to="/#services" className="nav-link">
                  Services
                </Link>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </nav>
              <div className="nav-right hidden md:flex shrink-0">
                <NavLink to={'/contact'}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group overflow-hidden px-6 py-2.5 rounded-full font-semibold text-sm text-white bg-white/10 border border-white/10 backdrop-blur-sm shadow-lg transition-all hover:bg-white/20 hover:border-blue-500/50 hover:shadow-blue-500/20">
                    <span className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="relative flex items-center gap-2">
                      Let's Talk
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </NavLink>
              </div>{' '}
              {/* hamburger menu icon */}
              <div className="md:hidden ">
                <label className="burger scale-90" htmlFor="burger">
                  <input type="checkbox" id="burger" onChange={toggleModal} checked={isOpen} />
                  <span />
                  <span />
                  <span />
                </label>
              </div>
            </div>
            <MobileNavbar />
          </motion.div>
        </Glass>
      </header>
    </>
  );
};

export default Navbar;
