interface IField {
  name: string,
  displayName: string,
}

interface ICountry {
  displayName: string,
  slug: string,
  holidayAllowance: number,
  holidayAllowanceType: string,
  fields: IField[],
}

export default ICountry;