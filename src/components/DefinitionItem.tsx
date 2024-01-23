import React, { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div className='my'>
      <dt className='text-lg font-bold text-gray-600'>{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
