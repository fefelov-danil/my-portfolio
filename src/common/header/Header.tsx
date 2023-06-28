'use client'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { CSSProperties, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { menuItems } from '../../constants/menuItems.ts'
import { animation } from '../../constants/animation.ts'

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const classForBurger = isOpenMenu ? styles.burgerActive : styles.burgerClose

  const switchBurger = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const bgFadeAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <motion.div
        className={styles.test}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
      >
        С начала 2022 года я занимаюсь разработкой приложений. Пишу на React js и Next js использую TypeScript. Имею
        опыт работы в команде в разных проектах, на каждом из которых многому научился. Команды были от 3х до 8 человек.
        У меня большой опыт в верстке. С 2016 года занимаюсь разработкой сайтов. Сложно посчитать, но думаю сделал более
        200 сайтов. К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу
        положительную обратную связь. К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад
        когда вижу положительную обратную связь. К работе отношусь ответственно, вникаю в задачу для меня важен
        результат. Я рад когда вижу положительную обратную связь. К работе отношусь ответственно, вникаю в задачу для
        меня важен результат. Я рад когда вижу положительную обратную связь. К работе отношусь ответственно, вникаю в
        задачу для меня важен результат. Я рад когда вижу положительную обратную связь. С начала 2022 года я занимаюсь
        разработкой приложений. Пишу на React js и Next js использую TypeScript. Имею опыт работы в команде в разных
        проектах, на каждом из которых многому научился. Команды были от 3х до 8 человек. У меня большой опыт в верстке.
        С 2016 года занимаюсь разработкой сайтов. Сложно посчитать, но думаю сделал более 200 сайтов. К работе отношусь
        ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу положительную обратную связь. К работе
        отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу положительную обратную связь.
        К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу положительную
        обратную связь. К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу
        положительную обратную связь. К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад
        когда вижу положительную обратную связь.
        <motion.p variants={bgFadeAnimation}>1111</motion.p>
      </motion.div>
      <div className={`${styles.burgerMenu} ${classForBurger}`} onClick={switchBurger}>
        <div className={styles.burgerContainer}>
          <div className={styles.burger}>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`${styles.menu} ${isOpenMenu && styles.active}`}>
        <ul className={styles.nav}>
          {menuItems.map((item, index) => {
            const delay = { '--delay': 0.1 * index + 's' } as CSSProperties

            return (
              <li key={index} style={delay}>
                <NavLink to={item.href} onClick={() => setIsOpenMenu(false)}>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
