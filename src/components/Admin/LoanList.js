import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteLoanTypeAction,
  getAllLoanTypeAction,
  getByIdLoanTypeAction,
  updateRefLoan,
} from "../../redux/AdminReducer";

export function LoanList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  //used to initilize :: read the data from api..
  useEffect(() => {
    dispatch(getAllLoanTypeAction());
  }, []);

  const deletLoanType = (item, index) => {
    dispatch(deleteLoanTypeAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 4000);
  };
  const updateLoanType = (item) => {
    //it will help to access thhis object from opage  only..>>
    dispatch(updateRefLoan(item));

    //from page..
    history.push("/create-loan");
  };

  const getLoanTypeById = (item) => {
    dispatch(getByIdLoanTypeAction(item));
  };
  const getAllLoanType = (item) => {
    dispatch(getAllLoanTypeAction(item));
  };

  return (
    <div class="container-xxl loan-list">
      <>
        <div className="row">
          <div className="col-3 col-md-2 d-none d-md-block"></div>
          <div className="col-12 col-md-8">
            <h3 className=" alert alert-info text-center p-3 m-2">
              Loan Program
            </h3>

            {successOperation && (
              <div className="alert alert-danger">Opeation Delete Success</div>
            )}
            <table className="table">
              <thead className="table table-bordered table-dark">
                <tr>
                  <th scope="col">#LOANID</th>
                  <th scope="col">LOANTYPE</th>
                  <th scope="col">MINIMUMAGE</th>
                  <th scope="col">MAXIMUMAGE</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="table table-bordered table-success">
                {[...state.admin.list].map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.loanId}</th>
                    <td>{item.loanType}</td>
                    <td>{item.minimumAge}</td>
                    <td>{item.maximumAge}</td>
                    <td>
                      <input
                        type="button"
                        onClick={() => updateLoanType(item)}
                        value="Edit"
                        className="btn-warning"
                      />
                      /
                      <input
                        type="button"
                        value="Delete"
                        onClick={() => deletLoanType(item, index)}
                        className="btn-danger"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-3 col-md-2 d-none d-md-block"></div>
        </div>
      </>
    </div>
  );
}
