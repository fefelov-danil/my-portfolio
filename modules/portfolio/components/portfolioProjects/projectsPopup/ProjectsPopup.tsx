import styles from './ProjectsPopup.module.scss'
import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import { Slider } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/slider/Slider'
import Link from 'next/link'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'

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
    <div className={styles.profilePopup}>
      <button className={styles.closeBtn} onClick={() => setOpenProjectPopup(-1)}>
        <IcomoonReact iconSet={iconSet} color={'#fff'} icon="close" size={50} />
      </button>
      <div className={styles.about}>
        <h2>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <ul className={styles.technologies}>
          {technologies.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <Link href={link} className={styles.projectLink} target={'_blank'}>
          <span>Перейти</span> <IcomoonReact iconSet={iconSet} color={'#fff'} icon="link" size={22} />
        </Link>
        <div className={styles.desc}>{children}</div>
      </div>
      <div className={styles.sliderCol}>
        <Slider title={title} images={images} />
      </div>
    </div>
  )
}
