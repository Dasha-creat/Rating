import React, { useState, useRef, useEffect } from 'react';
import { arrow } from '../../../assets/index';
import "./Dropdown.css";

interface IGroupDropdown {
  elements: Array<{ name: string; id: number }>;
  title: string;
  onSelect: (name: string, id: number) => void;
}

export const GroupDropdown: React.FC<IGroupDropdown> = ({ elements, title, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (name: string, id: number) => {
    onSelect(name, id);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="four button main-dropdown" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="custom-button group-button">
        {title}
        <img src={arrow} alt="arrow" width={"25rem"} />
      </button>
      {isOpen && (
        <div className="dropdown">
          {elements.map((element) => (
            <div
              key={element.id}
              onClick={() => handleItemClick(element.name, element.id)}
              className="button hover:fourtwo student four"
            >
              {element.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};