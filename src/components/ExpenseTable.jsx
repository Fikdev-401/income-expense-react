/* eslint-disable react/prop-types */
import { Table, Button } from "react-bootstrap";



const ExpenseTable = ({ expense }) => {


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    expense.map((item, index) => (
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

export default ExpenseTable;
