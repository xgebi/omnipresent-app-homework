import IFormData from "./IFormData";
import IAction from "./IAction";

function reducer(state: IFormData, action: IAction): IFormData {
  switch (action.type) {
    case "FIRST_NAME":
      return {
        ...state,
        firstName: action.value as string,
      }
    case "LAST_NAME":
      return {
        ...state,
        lastName: action.value as string,
      }
    case "COUNTRY":
      return changeCountry(state, action);
    case "DOB":
      return {
        ...state,
        dob: action.value as Date,
      }
    case "WORKING_HOURS":
      return {
        ...state,
        workingHours: action.value as number,
      }
    case "CHILDREN":
      return {
        ...state,
        numberOfChildren: action.value as number,
      }
    case "MARITAL_STATUS":
      return {
        ...state,
        maritalStatus: action.value as string,
      }
    case "HOLIDAY_ALLOWANCE":
      return {
        ...state,
        holidayAllowance: action.value as number,
      }
    case "SIN":
      return {
        ...state,
        socialInsuranceNumber: action.value as string,
      }
    default:
      return state;
  }
}

function changeCountry(state: IFormData, action: IAction): IFormData {
  return {
    ...state,
    country: action.value as string,
    socialInsuranceNumber: "",
    holidayAllowance: 0,
    maritalStatus: "",
    numberOfChildren: 0,
    workingHours: 0
  }
}

export default reducer;