import { MdChevronRight } from 'react-icons/md';

export interface Props {
  label: string;
  color: 'gray' | 'blue';
}

const Button: React.FC<Props> = ({ label, color }) => {
  const bgColor = color === 'gray' ? 'bg-gray-50' : 'bg-blue-400';
  return (
    <button className={`inline-flex items-center shadow-md ${bgColor}`}>
      {label}
      <MdChevronRight />
    </button>
  );
};

export default Button;
