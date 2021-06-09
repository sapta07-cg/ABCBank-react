import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createLoanTypeAction,
  updateLoanTypeAction,
} from "../../redux/AdminReducer";

export function LoanUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const fromEL = useRef();
  const state = useSelector((state) => state);
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const [loanType, setLoanType] = useState(state.admin.refloan.loanType);
  const [minimumAge, setMinimumAge] = useState(state.admin.refloan.minimumAge);
  const [maximumAge, setMaximumAge] = useState(state.admin.refloan.maximumAge);

  const updateLoanType = (e) => setLoanType(e.target.value);
  const updateMinimumAge = (e) => setMinimumAge(e.target.value);
  const updateMaximumAge = (e) => setMaximumAge(e.target.value);

  const addLoanProgram = (e) => {
    e.preventDefault();
    console.log(loanType, minimumAge, maximumAge);

    console.log(fromEL);
    console.log(fromEL.current.checkValidity());

    if (fromEL.current.checkValidity() === false) {
      //it will handel the flase case..>>
      e.preventDefault();
      e.stopPropagation();
      fromEL.current.classList.add("was-validated");
    } else {
      //this will call the redux action..>>
      dispatch(
        createLoanTypeAction({
          loanType,
          minimumAge,
          maximumAge,
        })
      );

      // A1 sucess
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 4000);

      //reset the from after fillinfg the from..
      setLoanType("");
      setMinimumAge("");
      setMaximumAge("");
    }
  };

  const updateLoanProgram = () => {
    dispatch(
      updateLoanTypeAction({
        loanId: state.admin.refloan.loanId,
        loanType,
        minimumAge,
        maximumAge,
      })
    );

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 4000);

    //we have to rest the from after date get updated..
    setLoanType("");
    setMinimumAge("");
    setMaximumAge("");
  };
  return (
    <div className="upsert">
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">
            {state.admin.refloan.loanId
              ? "Update LoanProgram"
              : "Create LoanProgram"}
          </h3>

          {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          <form ref={fromEL} class="needs-validation" novalidate>
            <div className="mb-2">
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
              <div class="invalid-feedback">
                Kindly Enter The Valid Loan Type
              </div>
            </div>

            <div className="mb-2">
              <input
                type="number"
                value={minimumAge}
                onChange={(e) => updateMinimumAge(e)}
                className="form-control"
                placeholder="Enter Minimum Age"
                max="69"
                min="15"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly Enter Valid The Minimum Age
              </div>
            </div>

            <div className="mb-2">
              <input
                type="number"
                value={maximumAge}
                onChange={(e) => updateMaximumAge(e)}
                className="form-control"
                placeholder="Enter Maximum Age"
                max="69"
                min="29"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Kindly Enter Valid The Maximum Age
              </div>
            </div>

            <div className="mb-1">
              {state.admin.refloan.loanId ? (
                <input
                  type="button"
                  className="btn btn-warning w-100"
                  value="Update Loan Program Data"
                  onClick={() => updateLoanProgram()}
                />
              ) : (
                <input
                  type="button"
                  className="btn btn-success w-100"
                  value="Add Loan Program Data"
                  onClick={(e) => addLoanProgram(e)}
                />
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
