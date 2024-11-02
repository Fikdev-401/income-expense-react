/* eslint-disable react/prop-types */
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";



const ExpenseTable = ({ expense, refresh }) => {

    const deleteHandler = (id) => {
        axios({
          method: "DELETE",
          url: 'http://localhost:3001/expenses/' + id,
        }).then(() => {
          refresh();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Income has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }).catch((err) => {
          console.log(err);
        })
      }


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
                                <Button onClick={() => deleteHandler(item.id)} variant="danger">
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
