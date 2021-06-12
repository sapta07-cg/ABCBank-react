import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GetAllLoanStatusAction } from "../../redux/LadReducer";

export function CustomerProfile() {
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
    <div className="row">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="text-center">Customer page </h3>

        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">CUSTOMER ID</th>
              <th scope="col">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {[...state.lad.list].map((item, index) => (
              <tr key={index}>
                <td>{item.customerRefId}</td>
                {item.loanAmount > 1 ? (
                  <td className="text-success"> Approved</td>
                ) : (
                  <td className="text-danger"> Rejected</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
