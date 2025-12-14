"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if dark mode is already set
    const html = document.documentElement
    const isDarkMode = html.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      setIsDark(false)
      localStorage.setItem("theme", "light")
    } else {
      html.classList.add("dark")
      setIsDark(true)
      localStorage.setItem("theme", "dark")
    }
  }

  useEffect(() => {
    if (!mounted) return
    
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    const html = document.documentElement
    
    if (savedTheme === "dark") {
      html.classList.add("dark")
      setIsDark(true)
    } else if (savedTheme === "light") {
      html.classList.remove("dark")
      setIsDark(false)
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        html.classList.add("dark")
        setIsDark(true)
      } else {
        html.classList.remove("dark")
        setIsDark(false)
      }
    }
  }, [mounted])

  if (!mounted) {
    return (
      <button
        className="h-8 w-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="h-8 w-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}

