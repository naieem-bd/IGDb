import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import SideBar from '../components/SideBar';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <>
      <GameHeading />
      <div>
        <PlatformSelector />
        <SortSelector />
      </div>
      <GameGrid />
    </>
  );
};

export default HomePage;
