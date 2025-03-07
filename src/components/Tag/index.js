import * as React from "react"
import { Link } from "gatsby"

import * as styles from './_tag.module.scss'

const Tag = () => {
  let tag

  tag = (
    <>
      <nav>
        <li>
          <Link to="/tags/">tag</Link>
        </li>
        <li className={styles.current}>
          <Link to="/tags/">tag2</Link>
        </li>
      </nav>
    </>
  )

  return tag
}

export default Tag