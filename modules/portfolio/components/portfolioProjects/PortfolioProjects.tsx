import { Inctagram } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/inctagram/Inctagram'

type Props = {
  openProject: number
  setOpenProjectPopup: (openProject: number) => void
}

export const PortfolioProjects = ({ openProject, setOpenProjectPopup }: Props) => {
  return <>{openProject === 2 && <Inctagram setOpenProjectPopup={setOpenProjectPopup} />}</>
}
