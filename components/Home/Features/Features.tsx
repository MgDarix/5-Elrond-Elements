import PropTypes from 'prop-types';
import React from 'react';
import {
  faArrowRightArrowLeft,
  faBolt,
  faCoins,
  faRocket
  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FeaturesProps = {
  //
};

const Features: React.FC<FeaturesProps> = () => {
  return <div className='container mx-auto px-3 py-24'>
    <div className="text-center pb-4">
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">A better way to trade assets</p>
      <p className="mt-4 max-w-2xl text-xl mx-auto">
        <strong className="text-primary-500 font-bold text-xl">JEX</strong> aims at being a decentralized exchange that allows safe exchange of Elrond ecosystem tokens between users.
      </p>
    </div>
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
              <FontAwesomeIcon size="1x" className="h-6 w-6" icon={faArrowRightArrowLeft} />
            </div>
            <p className="ml-16 text-lg leading-6 font-semibold">Trade</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">
            Buy {`&`} sell a large range of <span className="font-bold">ESDT</span> (Elrond Standard Digital Token) tokens through a our secure smart contract.
          </dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
              <FontAwesomeIcon size="1x" className="h-6 w-6" icon={faCoins} />
            </div>
            <p className="ml-16 text-lg leading-6 font-semibold">Earn</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">Generate yield and earn up to 17+ assets at the same time by staking <span className="font-bold">$JEX</span>.</dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
              <FontAwesomeIcon size="1x" className="h-6 w-6" icon={faBolt} />
            </div>
            <p className="ml-16 text-lg leading-6 font-semibold">Governance</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">
            Decide the path for the future of financial services using the <span className="font-bold">$JEX</span> governance token.
          </dd>
        </div>
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
              <FontAwesomeIcon size="1x" className="h-6 w-6" icon={faRocket} />
            </div>
            <p className="ml-16 text-lg leading-6 font-semibold">Launchpad</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">
            JEX Launchpad allows you to <span className="font-bold">participate</span> in early-stage projects and in their <span className="font-bold">public sales</span> rounds.
          </dd>
        </div>
      </dl>
    </div>
  </div>
};

Features.propTypes = {
  //
};

export default Features;
