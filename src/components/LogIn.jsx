import React from 'react'

function LogIn() {
  return (
    <div className="Sign">
      <h2>Log into your Account</h2>
      <form>
        
        <input type="email" required id="email" placeholder="your Email" />
        <input type="password"  id="password" placeholder="password" />
        <p>
          <button type="submit">Log in</button>
        </p>
      </form>
    </div>
  )
}

export default LogIn