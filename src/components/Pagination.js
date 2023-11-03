import {Pagination } from 'react-bootstrap';
const PaginationBar = ({pageNumber: pgNumber, setpageNumber: spNumber, onSearchCoderHub: onSearch} ) => {
    if (pgNumber === 0) return '';
    return (
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item onClick={(e) => {
          e.preventDefault();
          spNumber(pgNumber + 1);
          onSearch(e);
        }}>{2}</Pagination.Item>
        <Pagination.Item onClick={(e) => {
          onSearch(e,pgNumber + 1);
        }}  >{3}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>)
  }
  export default PaginationBar