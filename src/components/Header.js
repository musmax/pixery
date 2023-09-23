import React from 'react'
import styles from "../css/header.module.css"

const Header = () => {
  return (
    <header>
      <div className={styles.overall}>
      <input className={`${styles.searchInput} ${styles.anotherStyln}`} type="text" placeholder='Search...' />
      <button>Search...</button>
      </div>
    </header>
  )
}

export default Header