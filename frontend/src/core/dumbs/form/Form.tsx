import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

type FormData = {
  name: string
  image: string
  price: number
}

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().positive().integer().required(),
  })
  .required()

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) })
  const onSubmit = handleSubmit(data => console.log(data))
  console.log(errors)
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input {...register("name")} />
        <span>{errors.name?.message}</span>
      </label>
      <label>
        Price
        <input {...register("price")} />
        <span>{errors.price?.message}</span>
      </label>
      <input type="submit" />
    </form>
  )
}

export { Form }

/*
  onClick={() => {
    setValue("name", "luo") // ✅
    setValue("price", true) // ❌: true is not string
  }}
*/
