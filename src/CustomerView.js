import React from "react";
import { useSelector } from "react-redux";

export default function CustomerView() {
  const customers = useSelector((state) => state.customers);

  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyle: "none" }}>
        {customers.map((customers) => <li>{customers}</li>)}
      </ul>
    </div>
  );
}
