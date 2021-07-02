import { MdChevronRight } from 'react-icons/md';

export interface Props {
  label: string;
  color: 'gray' | 'blue';
}

const Button: React.FC<Props> = ({ label, color }) => {
  const bgColor = color === 'gray' ? 'bg-white bg-opacity-25' : 'bg-indigo-500';
  return (
    <button
      className={`inline-flex items-center px-5 py-1 rounded-full text-white ${bgColor}`}
    >
      {label}
      <MdChevronRight />
    </button>
  );
};

export default Button;
