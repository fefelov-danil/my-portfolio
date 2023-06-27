import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import iShop1 from '@/public/images/portfolioSliderInPopup/ishop/iShop2.jpg'
import iShop2 from '@/public/images/portfolioSliderInPopup/ishop/iShop3.jpg'
import iShop3 from '@/public/images/portfolioSliderInPopup/ishop/iShop4.jpg'
import iShop4 from '@/public/images/portfolioSliderInPopup/ishop/iShop5.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Ishop = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'iShop'}
      subtitle={'Site - WordPress'}
      images={[iShop1, iShop2, iShop3, iShop4]}
      link={'https://ishop124.ru/'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Данный сайт я создал и веду с 2017 года. Также занимаюсь его SEO продвижением. Сейчас у него хорошие позиции в
          Яндексе и Google по городу Красноряску. Можно практически любой комерческий запрос проверить по айфонам, сайт
          будет на первой старнице, а часто в топ 5. Два раза я делал редизайн, плюс регулярно, что то улучшаю и
          дорабатываю.
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
