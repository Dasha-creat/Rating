import { GroupDropdown } from '../../../shared/ui/index';

interface IGroupSelectButton {
  elements: Array<{name: string; id: string;}>
  onSelect: (name: string, id: string) => void;
  title: string;
  setStudents?: (students: Array<{id: string; name: string;}>) => void;
};

export const GroupSelectButton: React.FC<IGroupSelectButton> = ({ elements, onSelect, title, setStudents }) => {
  return (
    <GroupDropdown
      elements={elements} 
      title={title}  
      onSelect={(name, id) => {
        onSelect(name, id);
        if (setStudents) {
          setStudents([]);
        }
      }} 
    />
  );
};
