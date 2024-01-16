import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <div className='grid gap-10 content-area'>
      <div className='nav-bar'>
        <GenreList />
      </div>
      <div className='main-content'>
        <GameHeading />
        <div>
          <PlatformSelector />
          <SortSelector />
        </div>
        <GameGrid />
      </div>
    </div>
  );
};

export default HomePage;
