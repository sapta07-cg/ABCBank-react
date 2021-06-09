import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  deleteEmployeeAction,
  updateRefEmployee,
  getAllEmployeeAction,
} from "../redux/EmployeeReducer";

export function EmployeeList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, []);

  const deleteEmployee = (item, index) => {
    dispatch(deleteEmployeeAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);
  };

  const updateEmployee = (item) => {
    // we are doing this so that we can access this objec in the form page
    dispatch(updateRefEmployee(item));

    // form page
    history.push("/create-employee");
  };

  const getAllEmployee = (item) => {
    dispatch(getAllEmployeeAction(item));
  };

  return (
    <div className="row">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-secondary">Customer List</h3>

        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Serial No</th>
              <th scope="col">#CUSTOMERID</th>
              <th scope="col">FIRSTNAME</th>
              <th scope="col">LOANTYPE</th>
              <th scope="col">EMAIL</th>
              <th scope="col">MOBILE</th>
              <th scope="col">GENDER</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...state.employee.list].map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.loanType}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.gender}</td>
                <td>
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => updateEmployee(item)}
                    className="btn btn-link"
                  />{" "}
                  /
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => deleteEmployee(item, index)}
                    className="btn btn-link text-danger"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
