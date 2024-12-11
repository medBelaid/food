import React from 'react';
import { useTranslation } from 'react-i18next';

const HeadlineCards = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1 className='text-orange-600 font-bold text-4xl py-4 text-center'>
        {t('latest-recipes')}
      </h1>
      <div className='max-w-[1640px] mx-auto p-4 pt-3 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Oeufs cocotte en brioche</p>
            <p className='px-2'>Free through 16/12/2024</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Discover now</button>
          </div>
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
            alt='/'
          />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Pasta au jacquier et tomates cerises</p>
            <p className='px-2'>Total cost ≈ 12 $</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Discover now</button>
          </div>
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
            alt='/'
          />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Biscuits sablés salés aux graines de courge</p>
            <p className='px-2'>Exceptional dish</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Discover now</button>
          </div>
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt='/'
          />
        </div>
      </div>
    </>
  );
};

export default HeadlineCards;
