import React from 'react';
import IntroPage from '../IntroPage/IntroPage';
import FeaturesPage from '../FeaturesPage.js/FeaturesPage';
import DexterioEdge from '../DexterioEdge/DexterioEdge';
import SampleProjects from '../SampleProjects/SampleProjects';
import ConsultPage from '../ConsultPage/ConsultPage';
import CaseStudies from '../CaseStudies/CaseStudies';
import HowItWorks from '../HowItWorksComponent/HowItWorks';

const Home = () => {
    return (
        <div>
            <IntroPage/>
            <FeaturesPage/>
            <HowItWorks/>
            <CaseStudies/>
            <DexterioEdge/>
            <SampleProjects/>
            <ConsultPage/>
        </div>
    );
};

export default Home;