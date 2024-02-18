import MList from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from './list-item/ListItem';

interface IListItems {
  title: string;
  id: string;
  onClick?: () => void;
}

interface IListProps {
  listItems: IListItems[];
  isListLoading?: boolean;
}

const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper'
};

function List({ listItems, isListLoading }: IListProps) {
  const generateListItems = () => {
    if (!listItems?.length) return;
    return listItems.map((item, index) => {
      return (
        <>
          <ListItem title={item.title} id={item.id} onClick={item.onClick}></ListItem>
          {index >= listItems.length - 1 ? null : <Divider component="li" />}
        </>
      );
    });
  };

  return (
    <MList sx={style} aria-label="mailbox folders">
      {isListLoading ? 'Searching for results...' : generateListItems()}
    </MList>
  );
}

export default List;
