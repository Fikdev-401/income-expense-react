/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const FormControll = ({ refresh }) => {
  const [name, setName] = useState("");
  const [total, setTotal] = useState("");

  const incomeHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama gaboleh kosong >:!",
      });
      return;
    }

    const totalValue = parseInt(total);

    if (isNaN(totalValue)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Masa totalnya ga di isi?!?!",
      });
      return;
    }

    axios.post("http://localhost:3001/incomes", { name, total: totalValue })
      .then(() => {
        refresh();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Income has been added",
          showConfirmButton: false,
          timer: 1500
        });
        setName("");
        setTotal("");
      })
      .catch(err => {
        console.error("Error adding income:", err);
      });
  }

  const expenseHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama gaboleh kosong >:!",
      });
      return;
    }

    const totalValue = parseInt(total);

    if (isNaN(totalValue)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Masa totalnya ga di isi?!?!",
      });
      return;
    }

    axios.post("http://localhost:3001/expenses", { name, total: totalValue })
      .then(() => {
        refresh();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Expense has been added",
          showConfirmButton: false,
          timer: 1500
        });
        setName("");
        setTotal("");
      })
      .catch(err => {
        console.error("Error adding expense:", err);
      });
  }

  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder="Enter name"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="formTotal">
            <Form.Label>Total</Form.Label>
            <Form.Control
              onChange={(e) => setTotal(e.target.value)}
              type="number"
              value={total}
              placeholder="Enter total amount"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid total.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" onClick={incomeHandler} className=" btn btn-success me-2">Add Income</Button>
        <Button type="submit" onClick={expenseHandler} className=" btn btn-success">Add Expense</Button>
      </Form>
    </>
  );
};
export default FormControll;
