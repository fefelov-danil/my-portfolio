'use client'
import { muller } from '@/constants/fonts'
import styles from './Header.module.scss'
import { menuItems } from '@/constants/menuItems'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { CSSProperties, useState } from 'react'
import { CommonBg } from '@/assets/svg'

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const classForBurger = isOpenMenu ? styles.burgerActive : styles.burgerClose

  const switchBurger = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <>
      <div className={`${styles.burgerMenu} ${classForBurger}`} onClick={switchBurger}>
        <div className={styles.burgerContainer}>
          <div className={styles.burger}>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`${muller.variable} ${styles.menu} ${isOpenMenu && styles.active}`}>
        <CommonBg />
        <ul className={styles.nav}>
          {menuItems.map((item, index) => {
            const delay = { '--delay': 0.07 * index + 's' } as CSSProperties

            return (
              <li key={index} style={delay}>
                <Link href={item.href} onClick={() => setIsOpenMenu(false)}>
                  <span>
                    {item.name} <AiOutlineArrowRight size={70} color={'#CFD9E6'} />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
