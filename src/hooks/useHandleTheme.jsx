import { useEffect, useState } from "react";

export function useHandleTheme() {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--theme", "#313135")
      document.documentElement.style.setProperty("--font-theme", "#f6f6f6")
    } else {
      document.documentElement.style.setProperty("--font-theme", "#313135")
      document.documentElement.style.setProperty("--theme", "#f6f6f6")
    }
  }, [darkMode])

  return {darkMode, setDarkMode, changeTheme}
}
