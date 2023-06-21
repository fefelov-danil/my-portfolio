'use client'
import styles from './About.module.scss'
import me from '@/public/images/me.png'
import { stringsForBg } from '@/modules/about/constants/bigStringForBg'
import { StringBg } from '@/modules/about/components/stringBg/StringBg'
import { CommonBg, Lines } from '@/assets/svg'

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <CommonBg />
        <div className={styles.linesSvg}>
          <Lines />
        </div>
        <div className={`${styles.linesSvg} ${styles.linesSvgBottom}`}>
          <Lines />
        </div>
        <div className={styles.bgBlur}></div>
        <div className={styles.text}>
          <h1>
            <span>фефелов даниил</span>
            <br />
            front-end developer
          </h1>
          <p className={styles.subtitle}>Здравствуйте! </p>
          <p>С начала 2022 года я занимаюсь разработкой приложений. Пишу на React js и Next js использую TypeScript.</p>
          <p>
            Имею опыт работы в команде в разных проектах. Из них 1 коммерческий и 2 учебных. На каждом из этих проектов
            многому научился. Команды были от 3х до 8 человек.
          </p>
          <p>
            У меня большой опыт в верстке. С 2016 года занимаюсь разработкой сайтов, до 2022 года это было моей основной
            работой.
          </p>
          <p>
            К работе отношусь ответственно, стараюсь вникнуть в задачу. Для меня важен результат, и я рад, когда вижу
            положительную обратную связь. Знания и трудолюбие делают меня хорошим фронтенд разработчиком.
          </p>
        </div>
      </div>
      <div className={styles.stringForBg}>
        <p style={{ backgroundImage: `url(${me.src})` }}>
          {stringsForBg.map((str, i) => (
            <StringBg key={i} str={str} />
          ))}
        </p>
      </div>
    </div>
  )
}
