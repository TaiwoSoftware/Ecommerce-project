import SignUpForm from "./auth/SignUpForm";
function LogIn() {
  return (
    <div className="Sign">
      <h2>Log into your Account</h2>
      <form>
        <SignUpForm type="email" placeholder="email address" />
        <SignUpForm type="password" placeholder="password" />
        <p>
          <button type="submit">Log in</button>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
