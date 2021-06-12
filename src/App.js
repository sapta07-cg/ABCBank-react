import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { EmployeeUpsert } from "./components/EmployeeUpsert";
import { EmployeeList } from "./components/EmployeeList";
import { Footer } from "./common/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { AdminHome } from "./components/Admin/AdminHome";
import { LadHome } from "./components/Lad/LadHome";
import { Lad } from "./components/Lad/Lad";
import { Ladlist } from "./components/Lad/Ladlist";
import { CustomerProfile } from "./components/Lad/CustomerProfile";
import { Dashboard } from "./components/Admin/Dashboard";
import { LoanUpsert } from "./components/Admin/LoanUpsert";
import { LoanList } from "./components/Admin/LoanList";
import { Registration } from "./components/Registration";
import { AdminLogin } from "./components/AdminLogin";

function App() {
  const location = useLocation();
  const state = useSelector((state) => state);
  console.log(location);
  return (
    <>
      <AppNavBar />
      {location.pathname.includes("admin") && state.AdminLogin.loginAction && (
        <AdminHome />
      )}
      {location.pathname.includes("admin") && !state.AdminLogin.loginAction && (
        <Registration />
      )}
      {location.pathname.includes("lad") && <LadHome />}
      {/* {location.pathname.includes("admin") && <AdminHome />} */}

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home/customerloanrequest">
          <EmployeeUpsert />
        </Route>
        <Route path="/admin/customer-list">
          <EmployeeList />
        </Route>
        <Route path="/lad/ladlistpage">
          <Lad />
        </Route>
        <Route path="/lad/ladpage">
          <Ladlist />
        </Route>
        <Route path="/lad/customerpage">
          <CustomerProfile />
        </Route>
        <Route path="/admin/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin/create-loan">
          <LoanUpsert />
        </Route>
        <Route path="/admin/list-loan">
          <LoanList />
        </Route>
        <Route path="/admin/userlogin">
          <AdminLogin />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
