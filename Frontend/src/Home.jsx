import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  async function getData() {
    let apiURL = "http://localhost:5500/view";
    let result = await fetch(apiURL);
    let finalData = await result.json();
    setData(finalData);
  }

  useEffect(() => {
    getData();
  }, []);
  async function handleDelete(sno_id) {
    try {
      await axios.delete(`http://localhost:5500/delete?sno_id=${sno_id}`);
      getData();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  }

  return (
    <>
      

      <div>
        <div>
          <div>
  <div
    className="p-4 d-flex justify-content-between align-items-center shadow"
    
    style={{
      background: "pink",
      borderRadius: "8px",
    
    }}
    
  >
    <h2 className="mb-5 ">Todo List</h2>
    <Link to="/create">
      <button
        type="button"
        className="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "px",
          borderRadius: "65px",
        }}
      >
        Add Task
      </button>
      <div/>
<br/>
<br/>      
      

    </Link>
  </div>
  <div className="mt-4">
    <div
      className="shadow"
      style={{
        padding: "2rem",
        background: "gray",
        borderRadius: "8px",
      }}
    >
      {/* Table content */}
    </div>
  </div>
</div>
            <table
  className="table table-striped table-hover"
  style={{
    fontFamily: "Gill Sans Extrabold",
    fontSize: "20px",
    borderCollapse: "collapse",
    width: "100%",
  }}
>
  <thead style={{ backgroundColor: "#f2f2f2", fontWeight: "bold" }}>
    <tr>
      <th scope="col">S No.</th>
      <th scope="col" style={{ width: "250px" }}>
        Task
      </th>
      <th scope="col">Status</th>
      <th scope="col">Last date</th>
      <th scope="col">Complete Date</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr
        key={index}
        style={{
          borderBottom: "2px solid #ddd",
          padding: "10px 0",
        }}
      >
        <td>{item.sno_id}</td>
        <td>{item.task}</td>
        <td>{item.status}</td>
        <td>{item.due_date}</td>
        <td>{item.complication_date}</td>
        <td>
          <Link to={`/Edit/${item.sno_id}`}>
            <Button
              type="button"
              className="btn btn-lg btn-secondary"
              style={{
                padding: "5px 10px",
                fontSize: "16px",
              }}
            >
              Update
            </Button>
          </Link>
        </td>
        <td>
          <Button
            type="button"
            className="btn btn-lg btn-dark"
            onClick={() => handleDelete(item.sno_id)}
            style={{
              padding: "5px 10px",
              fontSize: "16px",
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
            </div>
          </div>
        
      
    </>
  );
}
