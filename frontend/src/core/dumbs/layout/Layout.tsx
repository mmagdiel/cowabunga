import clsx from "clsx"
import { Link } from "gatsby"
import React, { useState } from "react"
import { ReactComponent as Logo } from "~icons/logo.svg"
import * as styles from "./styles.module.css"

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  const { container, aside, open } = styles
  const { aside_logo, navbar, main, for_toggle } = styles
  return (
    <div className={container}>
      <aside className={clsx(aside, isOpen && open)}>
        <Logo className={aside_logo} width={64} />
        <ul className={navbar}>
          <li>
            <Link to={"/back-office"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/back-office/additionals"}>Additionals</Link>
          </li>
          <li>
            <Link to={"/back-office/bases"}>Bases</Link>
          </li>
          <li>
            <Link to={"/back-office/pizzas"}>Pizzas</Link>
          </li>
          <li>
            <Link to={"/back-office/desserts"}>Desserts</Link>
          </li>
          <li>
            <Link to={"/back-office/ingredients"}>Ingredients</Link>
          </li>
          <li>
            <Link to={"/back-office/drinks"}>Drinks</Link>
          </li>
          <li>
            <Link to={"/back-office/commands"}>Commands</Link>
          </li>
        </ul>
      </aside>
      <main className={main}>
        <div className={for_toggle}>
          <button onClick={handleClick}>X</button>
        </div>
        {children}
      </main>
    </div>
  )
}

export { Layout }
