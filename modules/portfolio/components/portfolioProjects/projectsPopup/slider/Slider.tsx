'use client'
import styles from '../ProjectsPopup.module.scss'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'

type Props = {
  title: string
  images: StaticImageData[]
}

export const Slider = ({ title, images }: Props) => {
  const [activeImg, setActiveImg] = useState(0)

  const changeImageHandler = (isBack: boolean) => {
    isBack && setActiveImg(activeImg - 1)
    !isBack && setActiveImg(activeImg + 1)
  }

  return (
    <div className={styles.gallery}>
      {activeImg > 0 && (
        <button className={`${styles.controlElements} ${styles.backEl}`} onClick={() => changeImageHandler(true)}>
          <IcomoonReact iconSet={iconSet} color={'#fff'} icon="arrow-left" size={25} />
        </button>
      )}
      {images.map((img, i) => {
        const position = activeImg * -100
        return <Image key={i} src={img} alt={title} style={{ left: `${position}%` }} unoptimized={true} />
      })}
      {activeImg < images.length - 1 && (
        <button className={`${styles.controlElements} ${styles.nextEl}`} onClick={() => changeImageHandler(false)}>
          <IcomoonReact iconSet={iconSet} color={'#fff'} icon="arrow-right" size={50} />
        </button>
      )}
    </div>
  )
}
