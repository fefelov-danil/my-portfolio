'use client'
import styles from './Experience.module.scss'
import IcomoonReact from 'icomoon-react'
import iconSet from '@/assets/icons/selection.json'
import bg from '@/public/images/background/shattered.png'
import Link from 'next/link'
import { RouteNames } from '@/constants/routes'
import { motion } from 'framer-motion'
import { animation } from '@/constants/animation'

export const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceBg} style={{ background: `url(${bg.src})` }}></div>
      <motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.1 }}>
        <motion.h1 variants={animation.fadeAnimation}>опыт работы</motion.h1>
      </motion.div>
      <div className={styles.segments}>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>04.2023 - текущий момент</p>
            <p className={styles.text}>
              <b>Стажировка IT Incubator</b>. Приложение по функционалу схоже с инстаграмом. На проекте много задач с
              которыми я ренее не сталкивался. Сейчас пишем отдельное приложение для админки. После этого начнем
              разрабатывать чат на websocket. Подробнее о том что уже было проделано на старнице{' '}
              <Link href={RouteNames.PORTFOLIO}>Портфолио</Link>
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAnimation} custom={0.1}>
            <span>2023</span>
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>01.2023 - 03.2022</p>
            <p className={styles.text}>
              <b>CRM для стоматологий</b>. Команда из 6 человек (2 backend и 4 frontend разработчика). В данный момент
              проект приостановлен. Основной функционал: база пациентов и медицинские карты для каждого, зубная формула
              (позволяет удобно сохранять информацию после осмотра), возможность интеграции с сайтом стоматологии для
              онлайн записи. Основные технологии на фронте: React, Redux Toolkit, Material UI.
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAnimation} custom={0.1}>
            <span>2023</span>
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>01.2022 - 01.2023</p>
            <p className={styles.text}>
              <b>Обучение</b>. Практически весь 2022 год я обучался как frontend разработчик. Улучшал свои знаяния в
              JavaScript, изучал React js и TypeScript, плюс конечно ежедневно писал код и создавал различные проекты на
              React.
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAnimation} custom={0.1}>
            <span>2022</span>
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>10.2016 - текущий момент</p>
            <p className={styles.text}>
              <b>Разработка сатов</b>. Уже почти 7 лет я занимаюсь созданием сайтов. У меня много постоянных клиентов,
              некоторые из них со мной сотрудничают с самого начала. Создаю лендинги, многостраничные сайты,
              интернет-магазины. Движок использую WordPress и October CMS. Умею быстро понять, что нужно заказчику.
              Всегда с уважением отношусь к клиентам.
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAnimation} custom={0.1}>
            <span>2016</span>
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>04.2014 - 04.2016</p>
            <p className={styles.text}>
              <b>SEO и контекстная реклама</b>. Почти 2 года я занимался продвижением сайтов, сначало это была настройка
              контекстной рекламы, затем SEO продвижение сайтов. За это время успел поработать в компании как SEO
              специалист, но больше работал напрямую с клиентами.
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAnimation} custom={0.1}>
            <span>2014</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
