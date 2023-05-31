import React from 'react';

import styles from './NavBar.module.css';


export default function NabBar() {
  return (
    <nav className={styles.conteiner}>
      <ul>
        <li><a href="/">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 4</a></li>
      </ul>
    </nav>
  )
}
