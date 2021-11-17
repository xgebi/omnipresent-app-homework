import IOptionals from "./IOptionals";

interface IFormData {
  firstName: string,
  lastName: string,
  dob: Date | null,
  country: string,
  socialInsuranceNumber: string,
  holidayAllowance: number,
  maritalStatus: string,
  numberOfChildren: number,
  workingHours: number,
  isSubmittable: boolean
}

export default IFormData;
