import React from "react"
import { getIcon } from "../../domain"
import * as styles from "./styles.module.css"

function ListSelect({ data, handleClick }) {
  const { list, list_item, list_item_icon } = styles
  return (
    <ul className={list}>
      {data.map(item => {
        const { id, name, price, image } = item
        const [isBool, Component] = getIcon(image)
        return (
          <li className={list_item} key={id} onClick={handleClick}>
            <i>{isBool && <Component className={list_item_icon} />}</i>
            <p id={id}>{name}</p>
            <strong>{price}</strong>
          </li>
        )
      })}
    </ul>
  )
}

export { ListSelect }
