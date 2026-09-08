import { useModalStore } from '@/context/modalStore';
import { Link, NavLink } from 'react-router-dom';

const MobileNavbar = () => {
  const { isOpen, closeModal } = useModalStore();
  if (!isOpen) return null;
  return (
    <>
      {/* <div tabIndex={0} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-50 z-30'></div> */}
      <nav className="flex flex-col gap-4 mt-4 items-center md:hidden z-20">
        <Link to="/#hero" className="text-white  " onClick={closeModal}>
          Home
        </Link>
        <Link to="/#about" className="text-white" onClick={closeModal}>
          About
        </Link>
        <Link to="/#services" className="text-white" onClick={closeModal}>
          Services
        </Link>
        <Link to="/projects" className="text-white" onClick={closeModal}>
          Projects
        </Link>
        <NavLink to={'/contact'} className="btn-cta mt-2 text-glow-white" onClick={closeModal}>
          Contact Me
        </NavLink>
      </nav>
    </>
  );
};

export default MobileNavbar;
