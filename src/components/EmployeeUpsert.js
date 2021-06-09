import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createEmployeeAction } from "../redux/EmployeeReducer";

export function EmployeeUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  const [firstName, setFirstName] = useState(state.employee.refemp.firstName);
  const [lastName, setLastName] = useState(state.employee.refemp.lastName);
  const [email, setEmail] = useState(state.employee.refemp.email);
  const [mobile, setMobile] = useState(state.employee.refemp.mobile);
  const [age, setAge] = useState(state.employee.refemp.age);
  const [panNumber, setPanNumber] = useState(state.employee.refemp.panNumber);
  const [loanType, setLoanType] = useState(state.employee.refemp.loanType);
  const [city, setCity] = useState(state.employee.refemp.city);
  const [stateName, setStateName] = useState(state.employee.refemp.stateName);
  const [nationality, setNationality] = useState(
    state.employee.refemp.nationality
  );
  const [annualIncome, setAnnualIncome] = useState(
    state.employee.refemp.annualIncome
  );
  const [gender, setGender] = useState(state.employee.refemp.gender);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);
  const updateLoanType = (e) => setLoanType(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateStateName = (e) => setStateName(e.target.value);
  const updateNationality = (e) => setNationality(e.target.value);
  const updateAnnualIncome = (e) => setAnnualIncome(e.target.value);
  const updateGender = (e) => setGender(e.target.value);
  const updateAge = (e) => setAge(e.target.value);
  const updatePanNumber = (e) => setPanNumber(e.target.value);

  const addEmployee = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, userName, password, email, mobile);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createEmployeeAction({
        firstName,
        lastName,
        email,
        mobile,
        loanType,
        city,
        stateName,
        nationality,
        annualIncome,
        gender,
        age,
        panNumber,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    //history.push("/list-employee");

    // reset the form
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setLoanType("");
    setCity("");
    setStateName("");
    setNationality("");
    setAnnualIncome("");
    setGender("");
    setAge("");
    setPanNumber("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.employee.refemp.id
            ? "Update Customer Details"
            : "Customer Details For Loan Request"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={firstName}
            onChange={(e) => updateFirstName(e)}
            className="form-control"
            placeholder="Enter First name"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={lastName}
            onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Enter Lastname"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={email}
            onChange={(e) => updateEmail(e)}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={mobile}
            onChange={(e) => updateMobile(e)}
            className="form-control"
            placeholder="Enter Mobile"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            value={loanType}
            onChange={(e) => updateLoanType(e)}
            className="form-control"
            placeholder="Enter Loan Type"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            value={city}
            onChange={(e) => updateCity(e)}
            className="form-control"
            placeholder="Enter City"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            value={stateName}
            onChange={(e) => updateStateName(e)}
            className="form-control"
            placeholder="Enter State"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            value={nationality}
            onChange={(e) => updateNationality(e)}
            className="form-control"
            placeholder="Enter nationality"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            value={annualIncome}
            onChange={(e) => updateAnnualIncome(e)}
            className="form-control"
            placeholder="Enter Annual Income"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            value={gender}
            onChange={(e) => updateGender(e)}
            className="form-control"
            placeholder="Enter gender"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            value={age}
            onChange={(e) => updateAge(e)}
            className="form-control"
            placeholder="Enter age"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            value={panNumber}
            onChange={(e) => updatePanNumber(e)}
            className="form-control"
            placeholder="Enter PAN Number"
          />
        </div>

        <div className="mb-1">
          {state.employee.refemp.userName ? (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Update Customer"
              onClick={() => {}}
            />
          ) : (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Add Customer"
              onClick={(e) => addEmployee(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
