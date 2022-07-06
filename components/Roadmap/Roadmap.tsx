import * as React from "react";
import PropTypes from "prop-types";

type RoadmapProps = {
  //
};

const Roadmap: React.FC<RoadmapProps> = () => {
  return <div className='container mx-auto px-3 py-16'>
    <div>
      <p className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl max-w-2xl mx-auto">
        Roadmap
      </p>
      <div className="mt-12 flex flex-col md:grid grid-cols-9 mx-auto text-gray-200">
        <div className="flex flex-row-reverse md:contents">
          <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-1 col-end-5 p-4 rounded-md my-4 ml-auto w-full">
            <p className="font-semibold text-lg text-gray-100">Q3 2022 - LAUNCH 5 ELROND ELEMENTS</p>
            <ul className="list-disc list-inside pl-4">
              <li>Design of 5 Elrond Elements</li>
              <li>Launch of Twitter, Discord and website</li>
              <li>Mint of first drop #1 for whithlist early sale the first 100 elements for 0.3 EGLD</li>
              <li>Mint of the second drop #2 for the presale for 200 elements for 0.4 EGLD</li>
              <li>Mint of third drop #3 the public sale for 700 elements for 0.5 EGLD</li>
              <li>Gift for our holders</li>
            </ul>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-primary-500 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-500 shadow"></div>
          </div>
        </div>
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-primary-500 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-500 shadow"></div>
          </div>
          <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-6 col-end-10 p-4 rounded-md my-4 mr-auto w-full">
            <p className="font-semibold text-lg text-gray-100">Q4 2022 - LKMEX {`&`} DAO FARM {`&`} LOTTERIE</p>
            <ul className="list-disc list-inside pl-4">
              <li>80% of mint revenue and 60% of royalties will be sent to the DAO wallet to farm LKMEX for the Element Holders. 50% of LKMEX revenues will be reinvested in more farming, the remaining 50% will be sent to will be sent to the owners every month. 40% of the royalties will be returned to the holders. 20% of the currency revenue will go to developers and designers</li>
              <li>Launch Lotterie for holders</li>
              <li>Don has an association related to the elements</li>
              <li>Set up a twitter to help young projects on Elrond at low cost and then transfer the earnings to the holders</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row-reverse md:contents">
          <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-1 col-end-5 p-4 rounded-md my-4 ml-auto w-full">
            <p className="font-semibold text-lg text-gray-100">Q1 2023 - LAUNCH OF ELEMENTS ISLANDS AND OTHERS...</p>
            <ul className="list-disc list-inside pl-4">
              <li>The future of this project is in hand! A new roadmap will be released, letting everyone know what we are planning for the future. We are planning a collection of clothing, as well as events and collaborations. A lot of things are still to come, may the strength of the 5 Elrond Elements be with us ❤</li>
            </ul>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-primary-500 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-500 shadow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

Roadmap.propTypes = {
  //
};

export default Roadmap;
