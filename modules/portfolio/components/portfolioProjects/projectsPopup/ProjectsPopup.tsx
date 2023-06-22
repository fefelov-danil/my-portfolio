import styles from './ProjectsPopup.module.scss'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import { Slider } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/slider/Slider'
import Link from 'next/link'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { fadeAnimation, fadeBottomAnimation, quickFadeAnimation } from '@/constants/animation'

type Props = {
  title: string
  subtitle: string
  technologies: string[]
  images: StaticImageData[]
  link: string
  setOpenProjectPopup: (openProject: number) => void
  children: ReactNode
}

export const ProjectsPopup = ({
  technologies,
  title,
  subtitle,
  images,
  link,
  setOpenProjectPopup,
  children,
}: Props) => {
  return (
    <motion.div
      className={styles.profilePopup}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.3 }}
      variants={quickFadeAnimation}
    >
      <motion.button
        className={styles.closeBtn}
        onClick={() => setOpenProjectPopup(-1)}
        variants={fadeAnimation}
        custom={0.7}
      >
        <IcomoonReact iconSet={iconSet} color={'#fff'} icon="close" size={50} />
      </motion.button>
      <div className={styles.about}>
        <motion.h2 variants={fadeBottomAnimation}>{title}</motion.h2>
        <motion.p className={styles.subtitle} variants={fadeBottomAnimation} custom={0.15}>
          {subtitle}
        </motion.p>
        <ul className={styles.technologies}>
          {technologies.map((item, i) => (
            <motion.li key={i} variants={fadeBottomAnimation} custom={i * 0.1 + 0.3}>
              {item}
            </motion.li>
          ))}
        </ul>
        <motion.div variants={fadeBottomAnimation} custom={0.45}>
          <Link href={link} className={styles.projectLink} target={'_blank'}>
            <span>Перейти</span> <IcomoonReact iconSet={iconSet} color={'#fff'} icon="link" size={22} />
          </Link>
        </motion.div>
        <div className={styles.desc}>{children}</div>
      </div>
      <motion.div className={styles.sliderCol} variants={fadeBottomAnimation} custom={0.75}>
        <Slider title={title} images={images} />
      </motion.div>
    </motion.div>
  )
}
