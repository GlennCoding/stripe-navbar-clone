import Link from 'next/link';
import Image from 'next/image';
import ArrowForward from '../ArrowForward';

export interface Props {
  icon: React.ReactElement<any>;
  title: string;
  link: string;
  description?: string;
  iconSize?: 'small' | 'large';
  arrow: boolean;
}

const LinkWithIcon: React.FC<Props> = ({
  icon,
  title,
  link,
  description,
  iconSize = 'small',
  arrow = true,
}) => {
  return (
    <Link href={link}>
      <a>
        <div
          className={`inline-flex ${iconSize === 'large' && 'items-center'}`}
        >
          <div className='mr-1'>{icon}</div>
          <div className=''>
            <div className='flex items-center'>
              <p>{title}</p>
              {arrow && <ArrowForward />}
            </div>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default LinkWithIcon;
