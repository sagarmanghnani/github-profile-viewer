import { useState } from 'react';
import { IPaginationInfo } from '../interfaces';
import Pagination from '../components/pagination/Pagination';

interface IUsePaginationInfo {
  totalItemCount: number;
  pageSize: number;
  onPageChange: (pageInfo: IPaginationInfo) => void;
  initialPage?: number;
}

function usePagination({
  totalItemCount,
  pageSize,
  onPageChange,
  initialPage
}: IUsePaginationInfo) {
  const [pageInfo, setRepoPageInfo] = useState<IPaginationInfo>({
    page: initialPage || 1,
    size: pageSize || 10
  });

  function handleOnPageChange(ev, value) {
    if (onPageChange) {
      onPageChange({
        page: value,
        size: pageInfo?.size
      });
    }
    setRepoPageInfo(() => {
      return {
        page: value,
        size: pageInfo?.size
      };
    });
  }

  const totalNumberPages = Math.ceil(totalItemCount / pageSize);
  const AugmentedPagination = (
    <Pagination totalPages={totalNumberPages} onChange={handleOnPageChange}></Pagination>
  );

  return {
    AugmentedPagination,
    pageInfo
  };
}

export default usePagination;
