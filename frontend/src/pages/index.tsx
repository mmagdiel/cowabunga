import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useSelector } from "react-redux"
import { useAdditionals } from "../commands"
import { useRoot } from "../core"

export default function Home() {
  const root = useRoot()
  const { data, isLoading, isError } = useAdditionals(root)
  const algo = useSelector(state => state)
  console.log(data, isLoading, isError, algo)
  return (
    <>
      <StaticImage src="../assets/images/hero.jpg" alt="Background pizza" />
      <h1>Hello world!</h1>
    </>
  )
}
