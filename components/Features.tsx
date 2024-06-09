import React from 'react';
import FeatureGrowthMonitoring from './FeatureGrowthMonitoring';
import FeatureCustomerSupport from './FeatureCustomerSupport';
import FeatureSalesMonitoring from './FeatureSalesMonitoring';

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="px-5 lg:container lg:px-20 mx-auto">
      <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
        <FeatureSalesMonitoring />
        <FeatureCustomerSupport />
        <FeatureGrowthMonitoring />
      </div>
    </div>
  );
};

export default Features;
