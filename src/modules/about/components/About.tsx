import styles from './About.module.scss'
import me from '../../../assets/images/me.png'
import lines1 from '../../../assets/images/background/lines1.png'
import { motion } from 'framer-motion'
import IcomoonReact from 'icomoon-react'
import { skills } from '../constants/skills.ts'
import { stringsForBg } from '../constants/bigStringForBg.ts'
import { StringBg } from './stringBg/StringBg.tsx'
import { animation } from '../../../constants/animation.ts'
import iconSet from '../../../assets/icons/selection.json'

export const About = () => {
  return (
    <motion.div
      className={styles.about}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={styles.info}>
        <motion.div variants={animation.fadeRightAnimation} className={styles.linesBg}>
          <img src={lines1} alt={''} />
        </motion.div>
        <div className={styles.text}>
          <h1>
            <span>Фефелов Даниил</span>
            <br />
            front-end developer
          </h1>
          <ul className={styles.skills}>
            {skills.map((skill, index) => (
              <li key={index} className={styles.skill}>
                <IcomoonReact iconSet={iconSet} color={'#fff'} icon={skill.icon} size={45} />
                <br />
                {skill.name}
              </li>
            ))}
          </ul>
          <p className={styles.subtitle}>Здравствуйте! </p>
          <p>С начала 2022 года я занимаюсь разработкой приложений. Пишу на React js и Next js использую TypeScript.</p>
          <p>
            Имею опыт работы в команде в разных проектах, на каждом из которых многому научился. Команды были от 3х до 8
            человек.
          </p>
          <p>
            У меня большой опыт в верстке. С 2016 года занимаюсь разработкой сайтов. Сложно посчитать, но думаю сделал
            более 200 сайтов.
          </p>
          <p>
            К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу положительную
            обратную связь.
          </p>
          <p>
            К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу положительную
            обратную связь.
          </p>
          <p>
            К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу положительную
            обратную связь.
          </p>
          <p>
            К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу положительную
            обратную связь.
          </p>
          <p>
            К работе отношусь ответственно, вникаю в задачу для меня важен результат. Я рад когда вижу положительную
            обратную связь.
          </p>
        </div>
        <motion.div variants={animation.fadeRightAnimation} className={`${styles.linesBg} ${styles.linesBgBottom}`}>
          <img src={lines1} alt={''} />
        </motion.div>
      </div>
      <div className={styles.stringForBg}>
        <p style={{ backgroundImage: `url(${me})` }}>
          {stringsForBg.map((str, i) => (
            <StringBg key={i} str={str} />
          ))}
        </p>
      </div>
    </motion.div>
  )
}
