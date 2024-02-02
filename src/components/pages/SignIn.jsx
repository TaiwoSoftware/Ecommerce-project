import React from "react";

function SignIn() {
  return (
    <div className="Sign">
      <h2>Create An Account</h2>
      <form>
        <input
          type="text"
          required
          id="fullName"
          placeholder="Your full name"
        />
        <input type="email" required id="email" placeholder="your Email" />
        <input type="tel" required id="tel" placeholder="your phone number" />
        <input type="text" required id="address" placeholder="House Address" />
        <input type="text" required id="country" placeholder="your country" />
        <input type="password"  id="password" placeholder="password" />
        <p>
          <button type="submit">Continue</button>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
