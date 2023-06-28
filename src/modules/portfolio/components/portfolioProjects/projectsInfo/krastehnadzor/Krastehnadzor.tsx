import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import krastehnadzor1 from '@/public/images/portfolioSliderInPopup/krastehnadzor/krastehnadzor1.jpg'
import krastehnadzor2 from '@/public/images/portfolioSliderInPopup/krastehnadzor/krastehnadzor2.jpg'
import krastehnadzor3 from '@/public/images/portfolioSliderInPopup/krastehnadzor/krastehnadzor3.jpg'
import krastehnadzor4 from '@/public/images/portfolioSliderInPopup/krastehnadzor/krastehnadzor4.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Krastehnadzor = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Krastehnadzor'}
      subtitle={'Site - WordPress'}
      images={[krastehnadzor1, krastehnadzor2, krastehnadzor3, krastehnadzor4]}
      link={'https://krastehnadzor.ru/'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Сайт по строительному надзору. Создавался в этом году. Дизайн для сайта разрабатывали вместе с клиентом. Сайт
          еще не полностью наполнен, но клиент это сможет сделать сам благодаря удобной панели администратора и
          видеинструкциям, которые я записал.
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
