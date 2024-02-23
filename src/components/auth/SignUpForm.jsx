
function SignUpForm({ type, placeholder, values, handleChange }) {
  return (
    <input
      type={type}
      required
      value={values}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default SignUpForm;
