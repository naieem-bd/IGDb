import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <>
      <div className='flex items-center mt-4'>
        <div className='flex-1 mb-2'>
          <GameHeading />
        </div>
        <div className='flex gap-4 mb-2'>
          <PlatformSelector />
          <SortSelector />
        </div>
      </div>
      <GameGrid />
    </>
  );
};

export default HomePage;
