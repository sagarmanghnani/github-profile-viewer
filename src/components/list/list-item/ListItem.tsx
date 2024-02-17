import MListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './list-item.css';

interface ListItemProps {
  title: string;
  onClick?: (id: string) => void;
  id: string;
}
const ListItem = ({ title, onClick, id }: ListItemProps) => {
  function handleOnClick() {
    if (onClick) {
      onClick(id);
    }
  }

  return (
    <MListItem>
      <ListItemText primary={title} onClick={handleOnClick} className="gh-list-item-text" />
    </MListItem>
  );
};

export default ListItem;
