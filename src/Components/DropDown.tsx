import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface DropDownProps {
  options: string[];
  onClick: (activeOption: string) => void;
}

const DropDown = ({ options, onClick }: DropDownProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  function handleOptionClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    onClick(e.currentTarget.textContent!);
  }
  function toggleOptions(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setShowOptions(!showOptions);
  }

  return (
    <div className="w-[150px] h-[75px]  border-y-2 bg-black-primary text-white-secondary text-nav relative">
      <button className="gap-2 flex items-center justify-center w-full h-full" onClick={toggleOptions}>
        <span>Book</span>
        <ChevronDown className="h-8 w-8" />
      </button>
      {showOptions && (
        <div className="absolute top-full left-0 w-full  bg-black-primary    text-white-secondary text-nav flex flex-col items-center justify-center">
          {options.map((option) => (
            <button
              key={option}
              onClick={handleOptionClick}
              className="gap-2 flex items-center border-y-2 w-full border-white-primary justify-center h-[75px]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
