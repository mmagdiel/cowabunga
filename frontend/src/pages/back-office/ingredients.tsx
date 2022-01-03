import React from "react"
import { Ingredients } from "~pizzas"
import { Layout } from "../../core"

function ingredients() {
  return (
    <Layout>
      <h1>Ingredients</h1>
      <Ingredients />
    </Layout>
  )
}

export default ingredients
