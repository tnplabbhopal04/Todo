import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { sno_id } = useParams();
  const [values, setValues] = useState({
    sno_id:"",
    status: "",
    complication_date: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5500/view?sno_id=${sno_id}`)
      .then((res) => {
        setValues((prevValues) => ({
          ...prevValues,
          status: res.data.status,
          complication_date: res.data.complication_date,
        }));
      })
      .catch((err) => console.log(err));
  }, [sno_id]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5500/update?sno_id=${sno_id}`, values)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-gray-100 justify-content-center align-items-center">
    <div className="w-50 bg-white rounded-lg p-5 shadow">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Todo List Update</h2>
        <div className="mb-4">
          <select className="form-select" aria-label="Select status" id="status" name="status" value={values.status} onChange={(e) => setValues({ ...values, status: e.target.value })}>
            <option value="select">Select Status</option>
            <option value="pending">Pending</option>
            <option value="success">Success</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="complication_date" className="form-label">Completion Date</label>
          <input type="date" className="form-control" id="complication_date" name="complication_date" value={values.complication_date} onChange={(e) => setValues({ ...values, complication_date: e.target.value })} />
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-lg btn-success">
Update Task
</button>

        </div>
      </form>
    </div>
  </div>
  );
}

export default Edit;
