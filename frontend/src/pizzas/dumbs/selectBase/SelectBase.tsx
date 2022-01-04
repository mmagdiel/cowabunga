import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Error, Loading, Step, useRoot } from "~core"
import { useBases } from "../../deal"
import { selectBase } from "../../domain"
import * as styles from "./styles.module.css"

function SelectBase() {
  const root = useRoot()
  const dispatch = useDispatch()
  const { name, price } = useSelector(state => state.base)
  const { data, isLoading, isError } = useBases(root)
  const handleClick = e => {
    const idSelected = e.target.id
    const itemSelect = data.find(item => item.id === parseInt(idSelected))
    if (itemSelect) {
      dispatch(selectBase(itemSelect))
    }
  }
  const { container, selected, selected_item } = styles
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return (
    <div className={container}>
      <Step data={data} handleClick={handleClick}>
        <div className={selected}>
          <h5>Base selected</h5>
          <div className={selected_item}>
            <p>{name}</p>
            <strong>{price}</strong>
          </div>
          <hr />
          <div className={selected_item}>
            <p></p>
            <strong>{price}</strong>
          </div>
        </div>
      </Step>
    </div>
  )
}

export { SelectBase }
