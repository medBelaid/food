import React, { useState} from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import {FaWallet, FaSignInAlt, FaLanguage} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import LanguageSelector from './LanguageSelector';
import { LANGUAGES } from '../constants';

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [nav, setNav] = useState(false)
  const [visibleLngMenu, setvisibleLngMenu] = useState(false)
  
  const toggleLngMenu = () => {
    setvisibleLngMenu(val => !val)
  }

  const onClose = () => setvisibleLngMenu(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 relative'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        {/* <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1> */}
        <img src="./logo.jpeg" alt="hello BIO" className='md:ml-5 md:mr-5 w-12 md:w-17'/>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[130px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none text-xs md:text-lg'
          type='text'
          placeholder={t('search-recipes')}
        />
      </div>
      <button className='flex gap-2 bg-black text-white md:flex items-center py-2 rounded-full drop-button text-xs md:text-lg' onClick={toggleLngMenu}>
        {document.body.dir === 'ltr' && <FaLanguage size={20} /> }
        {LANGUAGES.find(l => l.code === i18n.language)?.lang}
        {document.body.dir === 'rtl' && <FaLanguage size={20} /> }
      </button>
      <LanguageSelector visible={visibleLngMenu} onClose={onClose} />

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? `fixed top-0 ${document.body.dir === 'ltr' ? 'left-0' : 'right-0'} w-[300px] h-screen bg-white z-10 duration-300` : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className={`absolute ${document.body.dir === 'rtl' ? 'left-4' : 'right-4'} top-4 cursor-pointer`}
        />
        <img src="./logo.jpeg" alt="hello BIO" width='200' className='m-5'/>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                {/* <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li> */}
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' />{t('recipes')}</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><FaSignInAlt size={25} className='mr-4' /> {t('login')}</li>
                {/* <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li> */}
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
