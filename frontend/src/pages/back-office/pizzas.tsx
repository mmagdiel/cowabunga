import React from "react"
import { Pizzas } from "~commands"
import { Layout } from "../../core"

function pizzas() {
  return (
    <Layout>
      <h1>Pizzas</h1>
      <Pizzas />
    </Layout>
  )
}

export default pizzas
