import React, { useEffect, useState } from 'react';
import { FortuneStore } from './stores';
import { FortuneData } from './data/fortunes';
import Header from './components/Header/Header';
import FortuneCard from './components/FortuneCard/FortuneCard';

const App: React.FC = () => {
  const fortuneStore = FortuneStore;
  const [fortuneData, setFortuneData] = useState<FortuneData | null>(
    fortuneStore.getFortuneData()
  );
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const handleFortuneData = async (data: FortuneData | null) => {
      if (!data) {
        console.log('No fortune data available');
        return;
      }
      console.log('Fortune data updated:', data);
      setFortuneData(data);
      setAnimKey((prev) => prev + 1);
    };

    const removeListener = fortuneStore.on(handleFortuneData);

    return () => {
      removeListener();
    };
  }, []);

  function handleNextClick() {
    fortuneStore.nextFortune();
  }

  function getContent() {
    if (!fortuneData) {
      return (
        <div className='loading'>
          <span className='loading--spinner'>🥠</span>
          <h2>Cracking open your fortune...</h2>
        </div>
      );
    }

    return (
      <div className='contentContainer'>
        <div className='fortune-animate' key={animKey}>
          <FortuneCard
            data={fortuneData}
            onNextClick={handleNextClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div className='appContainer w-screen h-screen'>
      <Header lastUpdated={fortuneData?.lastUpdated} />
      {getContent()}
    </div>
  );
};

export default App;
