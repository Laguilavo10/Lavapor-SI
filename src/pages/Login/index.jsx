import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/userData"
import { users } from "../../utils/users"

export function Login() {
  const [viewPassword, setViewPassword] = useState(false)
  const FormUser = useRef(null)
  const navigate = useNavigate()
  let { setUserData } = useUser()

  const handleVisibilityPassword = () => {
    setViewPassword((prevState) => !prevState)
  }

  const validateUser = (event) => {
    event.preventDefault()
    const formData = new FormData(FormUser.current)
    const data = {
      user: formData.get("user"),
      password: formData.get("password"),
    }
    let canLogIn = users.some(
      (u) => u.id === data.user && u.password === data.password
    )

    if (canLogIn) {
      let userIn = users.find(
        (u) => u.id === data.user && u.password === data.password
      )
      setUserData(userIn)
      navigate("/")
    } else {
      navigate("/login")
    }
  }

  return (
    <>
      <main className="login-container">
        <aside className="login-aside"></aside>
        <section className="login-form">
          <h1>Login Administrator</h1>
          <form onSubmit={validateUser} ref={FormUser}>
            <label className="login-form--label">
              Usuario
              <div className="login-form--input">
                <input type="text" placeholder="CC" name="user" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // className="icon icon-tabler icon-tabler-id"
                  viewBox="0 0 24 24"
                  // strokeWidth="1"
                  fill="none"
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
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
                <input
                  type={viewPassword ? "text" : "password"}
                  placeholder="***************"
                  name="password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // className="icon icon-tabler icon-tabler-eye"
                  viewBox="0 0 24 24"
                  // strokeWidth="1.5"
                  fill="none"
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  onClick={handleVisibilityPassword}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {!viewPassword && <line x1="3" y1="3" x2="21" y2="21" />}
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
