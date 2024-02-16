import { Link } from 'react-router-dom'

import { useGetCollectionsQuery } from '@/app/services/baseApi'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// eslint-disable-next-line import/extensions
import 'swiper/css'
// eslint-disable-next-line import/extensions
import 'swiper/css/navigation'

import s from './home.module.scss'

export const Home = () => {
  const { data: topPopularAll } = useGetCollectionsQuery({
    page: 1,
    type: 'TOP_POPULAR_ALL',
  })

  const { data: anotherType } = useGetCollectionsQuery({
    page: 1,
    type: 'CATASTROPHE_THEME',
  })

  const { data: familyType } = useGetCollectionsQuery({
    page: 1,
    type: 'FAMILY',
  })
  const { data: prioritiesType } = useGetCollectionsQuery({
    page: 1,
    type: 'TOP_250_MOVIES',
  })

  return (
    <div className={s.home}>
      <div className={s.home__presentSlider}>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className={'one'}
          modules={[Autoplay, Navigation]}
          navigation
          pagination={{ clickable: true }}
          rewind
          slidesPerView={1}
          spaceBetween={30}
        >
          {topPopularAll?.items.map(item => (
            <SwiperSlide key={item.kinopoiskId}>
              <Link className={s.presentSlider__poster} to={`/movies/${item.kinopoiskId}`}>
                <img alt={'poster'} className={'image'} src={item.posterUrl} />
              </Link>
              <div className={s.presentSlider__name}>{item.nameRu}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={s.home__popularSlider}>
        <Link className={s.title} to={'/'}>
          Фильмы-новинки
        </Link>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={5}
          spaceBetween={10}
        >
          {topPopularAll?.items.map((item, index) => (
            <SwiperSlide key={index}>
              <Link className={s.poster} to={`/movies/${item.kinopoiskId}`}>
                <img alt={'poster'} className={s.image} src={item.posterUrl} />
              </Link>
              <div>{item.nameRu}</div>
            </SwiperSlide>
          ))}
          <SwiperSlide className={s.showAll}>
            <Link to={''}>Показать все</Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={s.home__prioritiesSlider}>
        <Link className={s.title} to={'/'}>
          Самые пересматриваемые фильмы
        </Link>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={5}
          spaceBetween={10}
        >
          {prioritiesType?.items.map((item, index) => (
            <SwiperSlide key={index}>
              <Link className={s.poster} to={`/movies/${item.kinopoiskId}`}>
                <img alt={'poster'} className={s.image} src={item.posterUrl} />
              </Link>
              <div>{item.nameRu}</div>
            </SwiperSlide>
          ))}
          <SwiperSlide className={s.showAll}>
            <Link to={''}>Показать все</Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={s.home__familySlider}>
        <Link className={s.title} to={'/'}>
          Кино для всей семьи
        </Link>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={5}
          spaceBetween={10}
        >
          {familyType?.items.map((item, index) => (
            <SwiperSlide key={index}>
              <Link className={s.poster} to={`/movies/${item.kinopoiskId}`}>
                <img alt={'poster'} className={s.image} src={item.posterUrl} />
              </Link>
              <div>{item.nameRu}</div>
            </SwiperSlide>
          ))}
          <SwiperSlide className={s.showAll}>
            <Link to={''}>Показать все</Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={s.home__catastropheSlider}>
        <a className={s.title} href={'/'}>
          Катастрофы
        </a>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={5}
          spaceBetween={10}
        >
          {anotherType?.items.map((item, index) => (
            <SwiperSlide key={index}>
              <Link className={s.poster} to={`/movies/${item.kinopoiskId}`}>
                <img alt={'poster'} className={s.image} src={item.posterUrl} />
              </Link>
              <div>{item.nameRu}</div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <a className={s.showAll} href={''}>
              Показать все
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
