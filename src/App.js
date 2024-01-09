import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from './components/Auth';
import Header from './components/Header';

function App() {

  const isLogin = useSelector(state => state.auth.isLoggedIn);

  return (
   <>
    <Router>
      <Header />
      <Switch>
        <Route path="/dashboard">
            {isLogin && <EmployeeList/>}
        </Route>
      </Switch>
      {!isLogin && <Auth/>}
    </Router>
 
   </>
  );
}

export default App;
