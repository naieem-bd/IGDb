const GameCardSkeleton = () => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure>
        <div className='skeleton h-52 w-full'></div>
      </figure>
      <div className='card-body'>
        <div className='skeleton h-4 w-28'></div>
        <div className='skeleton h-4 w-full'></div>
        <div className='skeleton h-4 w-full'></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
