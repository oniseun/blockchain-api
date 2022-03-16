import {useState} from "react";
import BlockDetailModal from "../components/BlockDetailModal";
import BlockList from '../components/BlockList'
import PaginationComponent from "../components/PaginationComponent";

function BlocksPage (props: any){

    
    const { blocks, getBlockDetail } = props
    const [show, setShow] = useState(false);

    const [selectedBlock, selectBlock] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = async (block: any) => {
            const blockDetail = await getBlockDetail(block?.hash)
            setShow(true);
            selectBlock(blockDetail)
        } 
      

    const block_list = blocks.map((details: any) => {

     return ( <BlockList key={details.hash} height={details.height} time={details.time} block_index={details.block_index} hash={details.hash} onClickHandler={handleShow}/>
     );
    });

    const header = (
      <tr>
      <th>Block Index</th>
      <th style={{width: "58%"}}>Hash</th>
      <th>Height</th>
      <th style={{width: "12%"}}>Time</th>
      <th> </th>
    </tr>
    )


    return (
      <>
        <BlockDetailModal blockDetail={selectedBlock} handleClose={handleClose} show={show} />
        <h3 className="display-5 mb-4 text-primary"> Latest Blocks </h3>
        <PaginationComponent header={header} items={block_list} perPage={10} activePage={1}/>
      </>
    );
  

}

export default BlocksPage;
