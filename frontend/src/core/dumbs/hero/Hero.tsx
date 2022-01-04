import clsx from "clsx"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./styles.module.css"

function Hero() {
  const { hero, hero_text, btn, order, create } = styles
  return (
    <div className={hero}>
      <StaticImage
        alt="Background pizza"
        src="../../../assets/images/hero.jpg"
      />
      <div className={hero_text}>
        <h1>Cowabunga Pizzas</h1>
        <Link className={clsx(btn, order)} to="/order">
          Order your pizza
        </Link>
        <Link className={clsx(btn, create)} to="/create">
          Create your pizza
        </Link>
      </div>
    </div>
  )
}

export { Hero }
