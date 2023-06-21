import styles from '../ProjectsInfo.module.scss'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import social1 from '@/public/images/portfolioSliderInPopup/inctagram/social1.jpg'
import social2 from '@/public/images/portfolioSliderInPopup/inctagram/social2.jpg'
import social3 from '@/public/images/portfolioSliderInPopup/inctagram/social3.jpg'
import social4 from '@/public/images/portfolioSliderInPopup/inctagram/social4.jpg'
import social5 from '@/public/images/portfolioSliderInPopup/inctagram/social5.jpg'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Inctagram = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Inctagram'}
      subtitle={'App - Next js'}
      images={[social1, social2, social3, social4, social5]}
      technologies={['Next js', 'Redux Toolkit', 'RTK Query', 'Material UI', 'SASS']}
      link={'https://inctagram-m9ju.vercel.app/'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <div className={styles.desc}>
        <p>Стажировка IT Incubator. Над проектом работает 7 человек. 2 backend разработчика и 5 frontend.</p>
        <p>Опишу наиболее интересные задачи с которыми мы столкунулись:</p>
        <ul>
          <li>
            Infinity Scroll. В данный момент работает на подгрузке постов в профиле.
            <br />
            Реализовано на RTK Query. Новые порции запрашиваем по курсору (id), добавляем используя метод merge RTK
            Query. При добавлении поста в своем профиле не ревалидируем все посты, а добавляем только новый пост в кэш
            RTK Query, при удалении после того как запрос успешно выполнен удаляем пост из кэша.
          </li>
          <li>
            Кроппинг и наложение фильтров. Можно добавлять в один пост до 10 фото. Каждую можно приближать, менять
            соотношение сторон и накладывать фильтры. Кроппинг и добавление фильров разбито на 2 шага. Пользователь
            может переключаться между шагами, листать картинки и видеть что он уже сделал, чтобы продолжить
            редактирование. Для этого мы используем локальный стейт, а также Redux Toolkit.
          </li>
          <li>
            Регистрация через google и github. В случае если почта которая у пользователя используется в google/github
            уже зарегистрирована в нашем приложении, то на эту почту придет ссылка по которой он может перейти и
            подтвердить merge.
          </li>
          <li>
            JWT token. Мы начинали делать на react query, использовали axios, с токенами работали через interceptors.
            Затем перешли на RTK Query, используем функцию baseQueryWithReauth.
          </li>
        </ul>
        <p>Я перечилслил то с чем много работал, но есть функционал в работе над которым я участия не принимал.</p>
      </div>
    </ProjectsPopup>
  )
}
