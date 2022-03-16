import { Button, Modal, Tab, Table, Tabs } from "react-bootstrap";
import PaginationComponent from "./PaginationComponent";
import TransactionList from "./TransactionList";

export default function BlockDetailModal(props: any) {

  const { hash, show, handleClose, blockDetail } = props

  const transHeader = (
    <tr>
      <th style={{width: "45%"}}>Hash</th>
      <th>Size</th>
      <th>Fee</th>
      <th>Relayed by</th>
      <th style={{width: "17%"}}>time</th>
    </tr>
  )

  let transList = []
  for (let x = 0; x < blockDetail?.tx?.length || 0; x++){
    const tx = blockDetail.tx[x];
    transList.push(
      <TransactionList key={tx.hash} hash={tx.hash} size={tx.size} fee={tx.fee} relayed_by={tx.relayed_by} time={tx.time} />
    )
  }
  return (
    <>
      <Modal show={show} onHide={() => handleClose()} size="lg" style={{maxWidth: "80%"}}>
        <Modal.Header closeButton>
          <Modal.Title>Block Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tabs defaultActiveKey="details" id={'uncontrolled-tab-' + hash } className="mb-3">
          <Tab eventKey="details" title="Details">
          <div  className="d-flex justify-content-center mt-2" >
          </div>
            <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td>Hash</td>
                  <td>{blockDetail?.hash}</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                  <td>{blockDetail?.size}</td>
                  </tr>
                  <tr>
                    <td>Block Index</td>
                  <td>{blockDetail?.block_index}</td>
                  </tr>
                  <tr>
                    <td>Previous Block</td>
                  <td>{blockDetail?.prev_block}</td>
                  </tr>
                </tbody>
              </Table>
          </Tab>
          <Tab eventKey="transactions" title="Transactions">
            <PaginationComponent header={transHeader} items={transList} perPage={5} activePage={1}/>
          </Tab>
        </Tabs>
       

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}