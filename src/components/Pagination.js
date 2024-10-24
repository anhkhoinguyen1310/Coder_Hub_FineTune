import { Pagination } from 'react-bootstrap';

const PaginationBar = ({ pageNumber, setpageNumber, onSearchCoderHub }) => {
  if (pageNumber === 0) return null;

  const goToPage = (page) => {
    setpageNumber(page);
    onSearchCoderHub(); // Call onSearchCoderHub without expecting an event
  };

  return (
    <Pagination className="pagination-bar">
      <Pagination.First onClick={() => {
        goToPage(1); // Go to the first page
      }} />
      <Pagination.Prev onClick={() => {
        if (pageNumber > 1) {
          goToPage(pageNumber - 1); // Go to the previous page
        }
      }} />
      <Pagination.Item active>{pageNumber}</Pagination.Item>
      <Pagination.Item onClick={() => goToPage(pageNumber + 1)}>
        {pageNumber + 1}
      </Pagination.Item>
      <Pagination.Next onClick={() => {
        goToPage(pageNumber + 1); // Go to the next page
      }} />
      <Pagination.Last onClick={() => {
        const lastPage = 10; // Adjust as needed for your use case
        goToPage(lastPage); // Go to the last page
      }} />
    </Pagination>
  );
};

export default PaginationBar;
