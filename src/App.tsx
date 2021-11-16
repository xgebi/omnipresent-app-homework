import React, { useReducer } from 'react';
import './App.css';
import data from './data.json';
import reducer from "./reducer";
import IFormData from "./IFormData";

const initialAppState: IFormData = {
  firstName: "",
  lastName: "",
  dob: null,
  country: "",
  socialInsuranceNumber: "",
  vacationAllowance: 0,
  maritalStatus: "",
  numberOfChildren: 0,
  workingHours: 0,
};

function App() {
  const [appState, dispatch] = useReducer(reducer, initialAppState)


  return (
    <div className="App">
      <label htmlFor="first-name">First name:</label>
      <input id="first-name" value={appState.firstName} onChange={(e) => dispatch({ type: "FIRST_NAME", value: e.target.value}) }/>
      <label htmlFor="last-name">Last name:</label>
      <input id="last-name" value={appState.lastName} onChange={(e) => dispatch({ type: "LAST_NAME", value: e.target.value}) }/>
      <label htmlFor="country">Country</label>
      <select id="country" value={appState.country} onChange={(e) => dispatch({ type: "COUNTRY", value: e.target.value}) }>
        <option value="">---</option>
        {data.countries.map((country) => {
          return (<option value={country.slug}>{country.displayName}</option>)
        })}
      </select>
      <button onClick={() => console.log(appState)}>Submit</button>
    </div>
  );
}

export default App;
