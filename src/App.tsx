import React, {ChangeEvent, ChangeEventHandler, useReducer, useState} from 'react';
import './App.css';
import data from './data.json';
import reducer from "./reducer";
import IFormData from "./IFormData";
import ICountry from "./ICountry";

const initialAppState: IFormData = {
  firstName: "",
  lastName: "",
  dob: null,
  country: "",
  socialInsuranceNumber: "",
  holidayAllowance: 0,
  maritalStatus: "",
  numberOfChildren: 0,
  workingHours: 0,
  isSubmittable: false,
};
const initialCountry: ICountry = {
    displayName: "",
    slug: "",
    holidayAllowance: 0,
    holidayAllowanceType: "none",
    fields: [],
  };

function App() {
  const [appState, dispatch] = useReducer(reducer, initialAppState);
  const [country, setCountry] = useState(initialCountry);

  function changeCountryHandler(e: ChangeEvent<HTMLSelectElement>) {
    setCountry(data.countries.find(country => country.slug === e.target.value) as ICountry);
    dispatch({type: "COUNTRY", value: e.target.value});
  }


  return (
    <div className="App">
      <section>
        <label htmlFor="first-name">First name:</label>
        <input id="first-name" value={appState.firstName}
               onChange={(e) => dispatch({type: "FIRST_NAME", value: e.target.value})}/>
      </section>
      <section>
        <label htmlFor="last-name">Last name:</label>
        <input id="last-name" value={appState.lastName}
               onChange={(e) => dispatch({type: "LAST_NAME", value: e.target.value})}/>
      </section>
      <section>
        <label htmlFor="country">Country</label>
        <select id="country" value={appState.country}
                onChange={changeCountryHandler}>
          <option value="">---</option>
          {data.countries.map((country) => {
            return (<option value={country.slug} key={country.slug}>{country.displayName}</option>)
          })}
        </select>
      </section>
      {country?.holidayAllowanceType === "max" && <section>
          <label htmlFor="holiday-allowance">Holiday Allowance</label>
          <input
              type={"number"}
              id="holiday-allowance"
              value={appState.holidayAllowance}
              onChange={(e) => dispatch({type: "HOLIDAY_ALLOWANCE", value: e.target.value})}
              max={country.holidayAllowance}
              min={0}
          />
      </section>}
      {country?.holidayAllowanceType === "min" && <section>
          <label htmlFor="holiday-allowance">Holiday Allowance</label>
          <input
              type={"number"}
              id="holiday-allowance"
              value={appState.holidayAllowance}
              onChange={(e) => dispatch({type: "HOLIDAY_ALLOWANCE", value: e.target.value})}
              min={country.holidayAllowance}
          />
      </section>}
      {country?.fields.find(field => field.name === "maritalStatus") && <section>
          <label htmlFor="marital-status">Marital Status:</label>
          <input
              id="marital-status"
              value={appState.maritalStatus}
              onChange={(e) => dispatch({type: "MARITAL_STATUS", value: e.target.value})}
          />
      </section>}
      {country?.fields.find(field => field.name === "sin") && <section>
          <label htmlFor="sin">Social Insurance Number:</label>
          <input
              id="sin"
              value={appState.socialInsuranceNumber}
              onChange={(e) => dispatch({type: "SIN", value: e.target.value})}
          />
      </section>}
      {country?.fields.find(field => field.name === "children") && <section>
          <label htmlFor="children">Number of children</label>
          <input
              type={"number"}
              id="children"
              value={appState.numberOfChildren}
              onChange={(e) => dispatch({type: "CHILDREN", value: e.target.value})}
              min={0}
              defaultValue={0}
          />
      </section>}
      {country?.fields.find(field => field.name === "workingHours") && <section>
          <label htmlFor="workingHours">Working hours:</label>
          <input
              id="workingHours"
              value={appState.workingHours}
              onChange={(e) => dispatch({type: "WORKING_HOURS", value: e.target.value})}
          />
      </section>}

      <button disabled={!appState.isSubmittable} onClick={() => console.log(appState)}>Submit</button>
    </div>
  );
}

export default App;
