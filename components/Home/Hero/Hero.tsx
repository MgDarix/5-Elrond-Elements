import PropTypes from 'prop-types';
import React from 'react';
import SVGExchange from './SVGExchange';

type HeroProps = {
  //
};

const Hero: React.FC<HeroProps> = () => {
  return <div className="container mx-auto px-3 flex min-h-screen items-center justify-center">
    <div className="-mt-8 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 items-center justify-between w-full">
      <div className="text-center md:text-left">
        <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight'>
          <strong>Welcome on <span className='text-primary-500'>5 Elrond Elements</span></strong>
        </h1>
        <h2 className="tracking-tight text-xl">
          1000 NFT based on the fundamentals living on #Elrond
        </h2>
        <div className='mt-4 flex justify-center md:justify-start gap-2'>
          <a rel="noreferrer" target={"_blank"} className='flex items-center px-3 py-2 bg-primary-500 border border-primary-500 hover:bg-primary-400 rounded text-base transition-all duration-200 ease-in-out hover:border-primary-500' href='#'>Mint coming</a>
        </div>
      </div>
      <div>
        <div className='w-1/2 md:w-4/5 mx-auto'>
          <img src="/elements.png" />
        </div>
      </div>
    </div>
  </div>
};

Hero.propTypes = {
  //
};

export default Hero;
