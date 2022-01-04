import React from "react"
import { useSelector } from "react-redux"
import { Hero } from "~core"

export default function Home() {
  const algo = useSelector(state => state)
  console.log(algo)
  return <Hero />
}

/*

console.log(data, isLoading, isError, algo)
const root = useRoot()
const { data, isLoading, isError } = useAdditionals(root)
const algo = useSelector(state => state)


*/
