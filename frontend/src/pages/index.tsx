import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useAdditionals } from "../commands"
import { useRoot } from "../core"

export default function Home() {
  const root = useRoot()
  const { data, isLoading, isError } = useAdditionals(root)
  console.log(data, isLoading, isError)
  return (
    <>
      <StaticImage src="../assets/images/hero.jpg" alt="Background pizza" />
      <h1>Hello world!</h1>
    </>
  )
}
