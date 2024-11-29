import { emailRegex } from "../regexs";

export const validateLogin = (name, value) => {
  let errors = {};
  let valid = true;
  switch (name) {
    case "email":
      if (value === null || value === "" || value === undefined) {
        errors.email = "This field is required.";
        valid = false;
      }
      if (value) {
        if (!emailRegex.test(value)) {
          errors.email = "Invalid email address.";
          valid = false;
        }
      }
      break;
    case "password":
      if (value === null || value === "" || value === undefined) {
        errors.password = "This field is required.";
        valid = false;
      }
      if (value) {
        if (value.length < 6 || value.length > 16) {
          errors.password =
            "Password length must be in between 6 to 16 characters only";

          valid = false;
        }
      }
      break;
    default:
      break;
  }
  return { errors, valid };
};

export const validateSubmitLogin = (loginData) => {
  let errors = {};
  let valid = true;
  // console.log({ loginData });
  if (
    loginData.email === null ||
    loginData.email === "" ||
    loginData.email === undefined
  ) {
    errors.email = "This field is required.";
    valid = false;
  }

  if (loginData.email) {
    if (!emailRegex.test(loginData.email)) {
      errors.email = "Invalid email address.";
      valid = false;
    }
  }

  if (
    loginData.password === null ||
    loginData.password === "" ||
    loginData.password === undefined
  ) {
    errors.password = "This field is required.";
    valid = false;
  }
  if (loginData.password) {
    if (loginData.password.length < 6 || loginData.password.length > 16) {
      errors.password =
        "Password length must be in between 6 to 16 characters only";
      valid = false;
    }
  }
  return { errors, valid };
};
