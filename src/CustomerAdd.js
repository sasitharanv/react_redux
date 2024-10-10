import React, { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  //   const [Customers, setCustomers] = useState([]);

  function addCustomer() {
    if (name) {
      //   setCustomers((previousState) => [...previousState, name]);
      dispatch(addCustomerAction(name));
      setName("");
    }
  }
  return (
    <div>
      <h1>Add new Customer</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={addCustomer}>add student</button>
    </div>
  );
}
