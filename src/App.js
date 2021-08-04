import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, SetEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            classname="grocery"
            placeholder="example: eggs"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit" className="submit-btn">
            {" "}
            {isEditing ? "edit" : "submit"}{" "}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;
