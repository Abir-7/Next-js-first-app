

import LookingFor from '@/components/HomePage/LookingFor';
import TopBanner from '@/components/HomePage/TopBanner';
import TopDoctor from '@/components/HomePage/TopDoctor';
import React from 'react';

const Home = () => {
  return (
    <div>
    <TopBanner></TopBanner>
    <TopDoctor></TopDoctor>
    <LookingFor></LookingFor>
    </div>
  );
};

export default Home;
