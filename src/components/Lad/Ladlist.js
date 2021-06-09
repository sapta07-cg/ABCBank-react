import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GetAllLoanStatusAction } from "../../redux/LadReducer";

export function Ladlist() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(GetAllLoanStatusAction());
  }, []);

  return (
    <div className="bg-container">
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-warning text-center m-2">
            Customer Loan List
          </h3>

          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          <table className="table table-success">
            <thead className="table-bg-top">
              <tr>
                <th scope="col">CUSTOMER ID</th>
                <th scope="col">LOAN TYPE</th>
                <th scope="col">EMI</th>
                <th scope="col">LOAN AMOUNT</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[...state.lad.list].map((item, index) => (
                <tr key={index}>
                  <td className="item-style">{item.customerRefId}</td>
                  <td className="item-style">{item.customerLoanType}</td>
                  <td className="item-style">{item.emi}</td>
                  <td className="item-style">{item.loanAmount}</td>
                  {item.loanAmount > 1 ? (
                    <td className="loan-approved"> Approved</td>
                  ) : (
                    <td className="loan-rejected"> Rejected</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
