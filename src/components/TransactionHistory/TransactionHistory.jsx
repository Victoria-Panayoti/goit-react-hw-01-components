import PropTypes from 'prop-types';
import { TransactionTable , Thead, Th, Tbody, Tr, Td} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
  <Thead>
   <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </Thead>

  <Tbody>{
    items.map(item=>(<Tr key={item.id}>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>))
    }
  </Tbody>
</TransactionTable>
    );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired
}