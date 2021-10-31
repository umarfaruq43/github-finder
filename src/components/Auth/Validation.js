const Validation = ({ email, userName, password, confirmPassword }) => {
  let err = {};

  if (!userName) {
    err.userName = "User name is required.";
  }
  if (!email) {
    err.email = "Email is required.";
  } else if (!/\s+@\s+\.\s+/.test(email)) {
    err.email = "Email is invalid ";
  }

  if (!password) {
    err.password = "Password is required.";
  } else if (password.lenght <= 5) {
    err.password = " Password must be 8 digit long";
  }

  if (confirmPassword === password) {
    err.confirmPassword = "Password is not the same.";
  }

  return err;
};

export default Validation;
