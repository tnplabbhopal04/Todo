import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    sno_id: "",
    task: "",
    status: "",
    due_date: "",
    complication_date: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:5500/add", values);
      if (result) {

        navigate('/');

      } else {
        console.log("error");
      }
    } catch (err) {
      console.error("Error creating task", err);
    }
  };

  return (
    <>
  <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
  <div
    className="w-50 bg-transparent rounded-3 p-4"
    style={{
      backgroundColor: "#f5f5f5",
      border: "2px solid #00bcd4",
      boxShadow: "0 0 20px rgba(0, 188, 212, 0.3)",
    }}
  >

    <form onSubmit={handleSubmit}>
      <h2 className="text-info text-center">Todo list</h2>
      <div className="mb-3">
        <label htmlFor="sno_id" className="form-label text-info">
          Serial Number
        </label>
        <input
          type="text"
          className="form-control shadow-sm"
          id="sno_id"
          name="sno_id"
          value={values.sno_id}
          onChange={handleChange}
          style={{
            backgroundColor: "rgba(0, 188, 212, 0.1)",
            border: "1px solid #00bcd4",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="task" className="form-label text-info">
          Task
        </label>
        <input
          type="text"
          className="form-control shadow-sm"
          id="task"
          name="task"
          value={values.task}
          onChange={handleChange}
          style={{
            backgroundColor: "rgba(0, 188, 212, 0.1)",
            border: "1px solid #00bcd4",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="status" className="form-label text-info">
          Status
        </label>
        <input
          type="text"
          className="form-control shadow-sm"
          id="status"
          name="status"
          value={values.status}
          onChange={handleChange}
          style={{
            backgroundColor: "rgba(0, 188, 212, 0.1)",
            border: "1px solid #00bcd4",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="due_date" className="form-label text-info">
          Due
        </label>
        <input
          type="date"
          className="form-control shadow-sm"
          id="due_date"
          name="due_date"
          value={values.due_date}
          onChange={handleChange}
          style={{
            backgroundColor: "rgba(0, 188, 212, 0.1)",
            border: "1px solid #00bcd4",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="complication_date" className="form-label text-info">
          Completion
        </label>
        <input
          type="date"
          className="form-control shadow-sm"
          id="complication_date"
          name="complication_date"
          value={values.complication_date}
          onChange={handleChange}
          style={{
            backgroundColor: "rgba(0, 188, 212, 0.1)",
            border: "1px solid #00bcd4",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-sm btn-info"
          style={{
            backgroundColor: "#00bcd4",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  );
}

export default Create;