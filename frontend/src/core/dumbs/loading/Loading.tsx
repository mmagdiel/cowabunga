import React from "react"
import * as styles from "./styles.module.css"

function Loading() {
  const { lds_roller } = styles
  return (
    <div className={lds_roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export { Loading }
