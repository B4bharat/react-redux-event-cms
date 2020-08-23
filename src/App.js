import React from "react";
import AddEvent from "./components/AddEvent";
import ListEvents from "./components/ListEvents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AddEvent />
      <ListEvents />
    </div>
  );
}
