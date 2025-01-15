import { GroupDropdown } from '../../../shared/ui/index'

interface IGroupSelectButton {
  elements: Array<{name: string; id: number;}>;
  onSelect: (name: string, id: number) => void;
  title: string;
};

export const GroupSelectButton: React.FC<IGroupSelectButton> = ({ elements, onSelect, title }) => {
  return (
    <GroupDropdown
      elements={elements} 
      title={title}  
      onSelect={onSelect} 
    />
  )
}