import IOptionals from "./IOptionals";

interface IFormData {
  firstName: string,
  lastName: string,
  dob: Date | null,
  country: string,
  socialInsuranceNumber: string,
  vacationAllowance: number,
  maritalStatus: string,
  numberOfChildren: number,
  workingHours: number
}

export default IFormData;