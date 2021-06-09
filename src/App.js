import logo from "./logo.svg";
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
import { Check } from "./components/Check";
import { LadFirst } from "./components/LadFirst";
import { AdminHome } from "./components/Admin/AdminHome";
import { LadHome } from "./components/Lad/LadHome";
import { Lad } from "./components/Lad/Lad";
import { Ladlist } from "./components/Lad/Ladlist";
import { CustomerProfile } from "./components/Lad/CustomerProfile";
import { Dashboard } from "./components/Admin/Dashboard";
import { LoanUpsert } from "./components/Admin/LoanUpsert";
import { LoanList } from "./components/Admin/LoanList";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <AppNavBar />
      {location.pathname.includes("admin") && <AdminHome />}
      {location.pathname.includes("lad") && <LadHome />}

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

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
