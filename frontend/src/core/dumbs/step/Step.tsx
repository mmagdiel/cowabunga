import React from "react"
import { ListSelect } from "../listSelect"
import * as styles from "./styles.module.css"

function Step({ data, handleClick, children }) {
  const { container, list, form } = styles
  return (
    <div className={container}>
      <div className={list}>
        <ListSelect data={data} handleClick={handleClick} />
      </div>
      <div className={form}>{children}</div>
    </div>
  )
}

export { Step }
