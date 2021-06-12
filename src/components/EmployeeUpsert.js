import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  createEmployeeAction,
  updateEmployeeAction,
} from "../redux/EmployeeReducer";

export function EmployeeUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const fromEL = useRef();
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

    console.log(fromEL);
    console.log(fromEL.current.checkValidity());

    if (fromEL.current.checkValidity() === false) {
      //it will handel the flase case..>>
      e.preventDefault();
      e.stopPropagation();
      fromEL.current.classList.add("was-validated");
    } else {
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
    }
  };

  const updateEmployee = (e) => {
    e.preventDefault();

    console.log(fromEL);
    console.log(fromEL.current.checkValidity());
    if (fromEL.current.checkValidity() === false) {
      //it will handel the flase case..>>
      e.preventDefault();
      e.stopPropagation();
      fromEL.current.classList.add("was-validated");
    } else {
      dispatch(
        updateEmployeeAction({
          id: state.employee.refemp.id,
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

      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 4000);

      //we have to reset the from again ..after the data updated..
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
    }
  };
  return (
    <div className="CustomerRequest">
      <div className="row body">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-info">
            {state.employee.refemp.id
              ? "Update Customer Details"
              : "Customer Details For Loan Request"}
          </h3>

          {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}
          <form ref={fromEL} class="needs-validation" novalidate>
            <div className="mb-1">
              <input
                type="text"
                value={firstName}
                onChange={(e) => updateFirstName(e)}
                className="form-control"
                placeholder="Enter First name"
                maxLength="15"
                minLength="2"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly, Please Enter Your First Name
              </div>
            </div>

            <div className="mb-1">
              <input
                type="text"
                value={lastName}
                onChange={(e) => updateLastName(e)}
                className="form-control"
                placeholder="Enter Lastname"
                required
                maxLength="15"
                minLength="2"
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly, Please Enter Your Last Name
              </div>
            </div>

            <div className="mb-1">
              <input
                type="email"
                value={email}
                onChange={(e) => updateEmail(e)}
                className="form-control"
                placeholder="Enter Email"
                maxLength="30"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly, Please Enter Your Valid Email
              </div>
            </div>

            <div className="mb-1">
              <input
                type="number"
                value={mobile}
                onChange={(e) => updateMobile(e)}
                className="form-control"
                placeholder="Enter Mobile"
                max="9999999999"
                min="999999999"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly, Please Enter Your Valid Mobile Number
              </div>
            </div>
            <div className="mb-1">
              <input
                type="text"
                value={loanType}
                onChange={(e) => updateLoanType(e)}
                className="form-control"
                placeholder="Enter Loan Type"
                maxLength="14"
                minLength="3"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Kindly, Please Enter Loan Type</div>
            </div>
            {/* <div className="mb-1">
              <label for="cars font-weight-bold">Choose a Loan:</label>

              <select name="loans" id="loans">
                <option value="car">Car Loan</option>
                <option value="home">Home Loan</option>
                <option value="personal">Personal Loan</option>
                <option value="business">Business Loan</option>
              </select>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Kindly, Please Enter Loan Type</div>
            </div> */}
            <div className="mb-1">
              <input
                type="text"
                value={city}
                onChange={(e) => updateCity(e)}
                className="form-control"
                placeholder="Enter City"
                maxLength="15"
                minLength="3"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Kindly, Please Enter Your City</div>
            </div>
            <div className="mb-1">
              <input
                type="text"
                value={stateName}
                onChange={(e) => updateStateName(e)}
                className="form-control"
                placeholder="Enter State"
                maxLength="20"
                minLength="3"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly, Please Enter Your State
              </div>
            </div>
            <div className="mb-1">
              <input
                type="text"
                value={nationality}
                onChange={(e) => updateNationality(e)}
                className="form-control"
                placeholder="Enter nationality"
                maxLength="6"
                minLength="5"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly, Please Enter Your Nationality
              </div>
            </div>
            <div className="mb-1">
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => updateAnnualIncome(e)}
                className="form-control"
                placeholder="Enter Annual Income"
                max="9999999999"
                min="99999"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly, Please Enter Your Annual Income{" "}
              </div>
            </div>
            <div className="mb-1">
              <input
                type="text"
                value={gender}
                onChange={(e) => updateGender(e)}
                className="form-control"
                placeholder="Enter gender"
                maxLength="6"
                minLength="4"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly, Please Enter Your Gender
              </div>
            </div>
            <div className="mb-1">
              <input
                type="number"
                value={age}
                onChange={(e) => updateAge(e)}
                className="form-control"
                placeholder="Enter age"
                max="69"
                min="15"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Kindly, Please Enter Your Age</div>
            </div>
            {state.employee.refemp.id ? (
              <div></div>
            ) : (
              <div className="mb-1">
                <input
                  type="text"
                  value={panNumber}
                  onChange={(e) => updatePanNumber(e)}
                  className="form-control"
                  placeholder="Enter PAN Number"
                  maxLength="10"
                  minLength="10"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">
                  Kindly, Please Enter Your Pan Number
                </div>
              </div>
            )}

            <div className="mb-1">
              {state.employee.refemp.id ? (
                <input
                  type="button"
                  className="btn btn-warning w-100"
                  value="Update Customer Data"
                  onClick={(e) => updateEmployee(e)}
                />
              ) : (
                <input
                  type="button"
                  className="btn btn-success w-100"
                  value=" Submit Customer Details "
                  onClick={(e) => addEmployee(e)}
                />
              )}
            </div>
          </form>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
