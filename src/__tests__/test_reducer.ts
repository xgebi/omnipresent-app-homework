import reducer from "../reducer";

test("reducer - firstName", () => {
  const res = reducer({
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
  }, { type: "FIRST_NAME", value: "test" })
  expect(res.firstName).toBe("test")
})

test("reducer - lastName", () => {
  const res = reducer({
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
  }, { type: "LAST_NAME", value: "test" })
  expect(res.lastName).toBe("test")
})

test("reducer - country", () => {
  const res = reducer({
    firstName: "",
    lastName: "",
    dob: null,
    country: "",
    socialInsuranceNumber: "",
    holidayAllowance: 0,
    maritalStatus: "",
    numberOfChildren: 1,
    workingHours: 50,
    isSubmittable: false,
  }, { type: "COUNTRY", value: "test" })
  expect(res.country).toBe("test")
  expect(res.workingHours).toBe(0)
  expect(res.numberOfChildren).toBe(0)
})