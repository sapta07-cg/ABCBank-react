import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAllLoanTypeAction } from "../../redux/AdminReducer";

export function Dashboard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  useEffect(() => {
    dispatch(getAllLoanTypeAction());
  }, []);

  return (
    <div className="dash-bord">
      <div class="container-xxl">
        <div>
          <>
            <div className="row">
              <div className="col-3 col-md-2 d-none d-md-block"></div>
              <div className="col-12 col-md-8">
                <h3 className="text-center p-3 m-2">Welcome to Admin Module</h3>

                {[...state.admin.list].map((item, index) => (
                  <div>
                    <h1 className="dashbord2">{item.loanType}</h1>
                  </div>
                ))}
              </div>
              <div className="col-3 col-md-2 d-none d-md-block"></div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
