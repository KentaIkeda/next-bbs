import BBSCardList from './components/BBSCardList';
import { BBSData } from './types/types';

async function getAllBBSData() {
  const response = await fetch('http://localhost:3000/api/post', {
    cache: 'no-store',
  });

  const bbsAllData = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData: BBSData[] = await getAllBBSData();
  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
