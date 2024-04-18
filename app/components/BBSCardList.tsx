import React from 'react';
import { BBSData } from '../types/types';
import BBSCard from './BBSCard';

interface BBSCardListProps {
  bbsAllData: BBSData[];
}

export default function BBSCardList({ bbsAllData }: BBSCardListProps) {
  console.log(bbsAllData);
  return (
    <div className='grid lg:grid-cols-3 px-4 pt-4 gap-4'>
      {bbsAllData.map((data: BBSData) => {
        return (
          <React.Fragment key={data.id}>
            <BBSCard bbsData={data} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
