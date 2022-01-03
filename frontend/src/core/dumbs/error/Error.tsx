import React from "react"
import { ReactComponent as Down } from "~icons/server_down.svg"
import * as styles from "./styles.module.css"

function Error() {
  const { error_bg } = styles
  return (
    <div className={error_bg}>
      <Down width="130" />
    </div>
  )
}

export { Error }
