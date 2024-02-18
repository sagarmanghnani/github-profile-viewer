import MListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './list-item.css';
import { ISearchUserDetail } from '../../../interfaces';

interface ListItemProps {
  title: string;
  onClick?: (searchedUser: ISearchUserDetail) => void;
  id: string;
}
const ListItem = ({ title, onClick, id }: ListItemProps) => {
  function handleOnClick() {
    if (onClick) {
      onClick({
        login: title,
        id: id,
        avatar_url: '',
        url: ''
      });
    }
  }

  return (
    <MListItem>
      <ListItemText primary={title} onClick={handleOnClick} className="gh-list-item-text" />
    </MListItem>
  );
};

export default ListItem;
