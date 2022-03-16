
import { Button } from 'react-bootstrap'


export default function BlockList(props: any) { 
    
  const { hash, height, time, block_index, onClickHandler } = props;

  return (
       <tr>
        <td>{block_index}</td>
        <td>{hash}</td>
        <td>{height}</td>
        <td>{time}</td>
        <td>
          <Button onClick={() => onClickHandler({hash})} size="sm" variant="secondary">Details</Button>
        </td>
      </tr>
  );
}