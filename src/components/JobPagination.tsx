import { Pagination } from "react-bootstrap";
import { Container } from "react-bootstrap";

interface PaginationProps {
  current: number;
  total: number;
  onChangePage: (page: number) => void;
}

const JobPagination = (prop: PaginationProps) => {
  let items = [];
  for (let page = 1; page <= prop.total; page++) {
    items.push(
      <Pagination.Item
        className="text-white"
        key={page}
        active={page === prop.current}
        onClick={() => {
          prop.onChangePage(page);
        }}
      >
        {page}
      </Pagination.Item>
    );
  }
  return <Pagination className="text-center">{items}</Pagination>;
};

export default JobPagination;
