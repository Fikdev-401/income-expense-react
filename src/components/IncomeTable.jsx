/* eslint-disable react/prop-types */
import { Table, Button } from "react-bootstrap";


const IncomeTable = ({ income }) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          income.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.total}</td>
              <td>
                <Button variant="warning" className="me-2">
                  Edit
                </Button>
                <Button variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default IncomeTable;
