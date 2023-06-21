'use client'
import styles from './Portfolio.module.scss'
import { CarouselItem } from '@/modules/portfolio/components/carouselItem/CarouselItem'
import { useEffect, useState } from 'react'
import { carouselItems, paramsForCarousel } from '@/modules/portfolio/constants/carousel'
import { useHangEventsOnDocument } from '@/modules/portfolio/hooks/useHangEventsOnDocument'
import { PortfolioProjects } from '@/modules/portfolio/components/portfolioProjects/PortfolioProjects'

export const Portfolio = () => {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(1)
  const [openProjectPopup, setOpenProjectPopup] = useState(-1)
  const [mouseIsDown, setMouseIsDown] = useState(false)
  const [mouseDownXInPercent, setMouseDownXInPercent] = useState(0)
  const [disabledOnclick, setDisabledOnclick] = useState(false)

  useHangEventsOnDocument(
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleScroll,
    [mouseDownXInPercent, mouseIsDown, active, openProjectPopup > 0],
    openProjectPopup > 0
  )

  useEffect(() => {
    setLoading(false)
  }, [])

  function handleMouseDown(e: MouseEvent) {
    setMouseIsDown(true)
    setMouseDownXInPercent(Math.floor((e.clientX / window.innerWidth) * 100))
  }

  function handleMouseMove(e: MouseEvent) {
    if (!mouseIsDown) return

    const currentXInPercent = Math.floor((e.clientX / window.innerWidth) * 100)

    if (mouseDownXInPercent - currentXInPercent < -paramsForCarousel.mouseOffsetInPercent && active !== 0) {
      setDisabledOnclick(true)
      setActive(active - 1)
      setMouseDownXInPercent(currentXInPercent)
    } else if (
      mouseDownXInPercent - currentXInPercent > paramsForCarousel.mouseOffsetInPercent &&
      active !== paramsForCarousel.indexLastElOfArr
    ) {
      setDisabledOnclick(true)
      setActive(active + 1)
      setMouseDownXInPercent(currentXInPercent)
    }
  }

  function handleMouseUp() {
    setMouseIsDown(false)
    setDisabledOnclick(false)
  }

  function handleScroll(e: WheelEvent) {
    if (e.deltaY > 0 && active !== paramsForCarousel.indexLastElOfArr) setActive(active + 1)
    if (e.deltaY < 0 && active !== 0) setActive(active - 1)
  }

  if (loading) return <h1>Loading</h1>

  return (
    <>
      <div className={styles.portfolioCarousel}>
        {carouselItems.map((item, i) => (
          <CarouselItem
            key={i}
            amountItems={carouselItems.length}
            index={i}
            active={active}
            setActive={setActive}
            setOpenProjectPopup={setOpenProjectPopup}
            subtitle={item.subtitle}
            title={item.title}
            num={item.num}
            img={item.img}
            disabledOnclick={disabledOnclick}
            setMouseIsDown={setMouseIsDown}
          />
        ))}
      </div>
      <PortfolioProjects openProject={openProjectPopup} setOpenProjectPopup={setOpenProjectPopup} />
    </>
  )
}
