interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return <div className='badge badge-primary'>{score ? score : 0}</div>;
};

export default CriticScore;
