import React from 'react';
import Link from 'next/link';

export interface Props {
  icon: string;
  title: string;
  link: string;
}

const LinkWithIcon: React.FC<Props> = ({ icon, title, link }) => {
  return (
    <div className='bg-red-500'>
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </div>
  );
};

export default LinkWithIcon;
