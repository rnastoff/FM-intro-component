export default function validate(values) {
  let errors = {};

  // firstName
  if (!values.firstName.trim()) {
    errors.firstName = "First Name cannot be empty";
    console.log("firstName: ", values.firstName);
  }

  // lastName
  if (!values.lastName.trim()) {
    errors.lastName = "Last Name cannot be empty"
  }

  // email
  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Looks like this is not an email"
  }

  // password
  if (!values.password.trim()) {
    errors.password = "Password cannot be empty"
  }

  return errors;
}