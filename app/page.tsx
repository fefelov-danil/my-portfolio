import styles from './Home.module.scss'
import Link from 'next/link'
import { muller } from '@/constants/fonts'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { menuItems } from '@/constants/menuItems'

export default function Home() {
  return (
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
  )
}
