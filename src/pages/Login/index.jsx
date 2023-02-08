import React from "react"

export function Login() {
  return (
    <>
      <main className="login-container">
        <aside className="login-aside"></aside>
        <section className="login-form">
          <h1>Login Administrator</h1>
          <form action="">
            <label className="login-form--label">
              Usuario
              <div className="login-form--input">
                <input type="text" placeholder="CC" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-id"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="4" width="18" height="16" rx="3" />
                  <circle cx="9" cy="10" r="2" />
                  <line x1="15" y1="8" x2="17" y2="8" />
                  <line x1="15" y1="12" x2="17" y2="12" />
                  <line x1="7" y1="16" x2="17" y2="16" />
                </svg>
              </div>
            </label>
            <label className="login-form--label">
              Contraseña
              <div className="login-form--input">
                <input type="password" placeholder="***************" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-eye"
                  // width="44"
                  // height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  // stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="3" y1="3" x2="21" y2="21" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                </svg>
              </div>
            </label>
            <button className="login-btn">LogIn</button>
          </form>
        </section>
      </main>
    </>
  )
}
