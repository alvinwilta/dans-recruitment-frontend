import { Pagination } from "react-bootstrap";
import { Container } from "react-bootstrap";

interface PaginationProps {
  current: number;
  total: number;
  onChangePage: (page: number) => {};
}

const JobPagination = (prop: PaginationProps) => {
  let items = [];
  for (let page = 1; page <= prop.total; page++) {
    items.push(
      <Pagination.Item
        className="text-white"
        key={page}
        data-page={page}
        active={page === prop.current}
        onClick={() => prop.onChangePage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }
  return <Container>{items}</Container>;
};

export default JobPagination;
