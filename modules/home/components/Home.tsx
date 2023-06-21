import { baronNeue, muller } from '@/constants/fonts'
import styles from './Home.module.scss'
import { menuItems } from '@/constants/menuItems'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const Home = () => {
  return (
    <>
      <div className={`${muller.variable} ${styles.menu}`}>
        <ul className={styles.nav}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                {item.name} <AiOutlineArrowRight size={70} color={'#CFD9E6'} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
