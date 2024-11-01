/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import FormControll from "./components/FormControll";
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Col from 'react-bootstrap/Col';
import ExpenseTable from "./components/ExpenseTable";
import IncomeTable from "./components/IncomeTable";
function App() {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  const getIncomeAndExpense = () => {
    Promise.all([
      axios.get("http://localhost:3001/incomes"),
      axios.get("http://localhost:3001/expenses"),
    ])
      .then(([incomeRes, expenseRes]) => {
        setIncome(incomeRes.data);
        setExpense(expenseRes.data);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getIncomeAndExpense();
  }, []);


  return (
    <>
      <div>
        <Container className="py-5">
          <Row>
            <Col md={6} >
              <h1>Income Expense</h1>
              <FormControll refresh={getIncomeAndExpense} />
              <br />
            </Col>
            <Col md={6}>
              <Col md={12}>
                <h4 className="mt-3">Income</h4>
                <IncomeTable income={income} />
              </Col>
              <Col md={12}>
                <h4>Expense</h4>
                <ExpenseTable expense={expense} />
              </Col>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default App
