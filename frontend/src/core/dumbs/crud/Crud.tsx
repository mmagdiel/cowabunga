import React from "react"
import { Form } from "../form"
import { List } from "../list"
import * as styles from "./styles.module.css"

function Crud({ data }) {
  const { container, list, form } = styles
  return (
    <div className={container}>
      <div className={list}>
        <List data={data} />
      </div>
      <div className={form}>
        <Form />
      </div>
    </div>
  )
}

export { Crud }
