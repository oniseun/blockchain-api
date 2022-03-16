
export default function TransactionList(props: any) { 
    
  const { hash, size, fee, relayed_by, time } = props;
  return (
       <tr>
        <td>{hash}</td>
        <td>{size}</td>
        <td>{fee}</td>
        <td>{relayed_by}</td>
        <td>{time}</td>
      </tr>
  );
}