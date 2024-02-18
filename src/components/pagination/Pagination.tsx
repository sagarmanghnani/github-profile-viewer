import MPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './pagination.css';

interface IPaginationProps {
  totalPages: number;
  onChange: (e, value) => void;
}

const Pagination = ({ totalPages, onChange }: IPaginationProps) => {
  return (
    <div className="pagination-container">
      <Stack spacing={2}>
        <MPagination count={totalPages} variant="outlined" shape="rounded" onChange={onChange} />
      </Stack>
    </div>
  );
};

export default Pagination;
