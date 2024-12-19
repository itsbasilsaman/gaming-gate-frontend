import * as yup from "yup";

export const ValidationLogin = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
});

import * as Yup from "yup";

export const ValidationPhoneNumber = Yup.object({
  countryCode: Yup.string()
    .required("Country code is required")
    .matches(/^\+\d{1,3}$/, "Invalid country code format"), // Validates country code like +91, +1, +44, etc.
  phoneNumber: Yup.string()
    .required("Phone number is required")
    // .matches(/^\+[\d]{1,3}[\d]{10}$/, "Invalid phone number format")  // Validates phone number with exactly 10 digits
});

