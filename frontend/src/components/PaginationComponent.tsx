import { Pagination, Table } from "react-bootstrap";



import  { useState } from "react";

function PaginationComponent(props: any) {
    const {header, items, activePage, perPage } = props
    const [currentPage, setCurrentPage] = useState(activePage);
    const maxPage = Math.ceil(items.length / perPage);
    const pages = [];

    for (let number = 1; number <= maxPage; number++) {
        pages.push(
        <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
            {number}
          </Pagination.Item>,
        );
    }
  
    return (
        <>
        <Table striped bordered hover style={{tableLayout: "fixed", wordWrap: "break-word"}}>
          <thead>
            {header}
          </thead>
         <tbody>
            {items.slice((currentPage - 1) * perPage, ((currentPage - 1) * perPage) + perPage)}
        </tbody>
        </Table>
        <br/>
        <Pagination style={{overflowX: "auto"}}>
            {pages}
        </Pagination>
        </>
    )
}

  export default PaginationComponent