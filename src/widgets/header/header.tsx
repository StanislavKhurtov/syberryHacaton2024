import { ChangeEvent, useState } from 'react'

import { useGetSearchByKeywordQuery } from '@/app/services/baseApi'
import { Block } from '@/shared/ui/block'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

import s from './header.module.scss'

export const Header = () => {
  const [search, setSearch] = useState('')
  const { data } = useGetSearchByKeywordQuery({
    keyword: search,
  })

  return (
    <Block as={'header'} className={s.header}>
      <div className={s.header__block}>
        <a className={s.header__btn} href={'/'}>
          Кино+
        </a>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
          type={'text'}
          value={search}
        />
        {search && (
          <List
            className={s.header__list}
            sx={{ bgcolor: 'background.paper', height: '30%', maxWidth: 360, width: '100%' }}
          >
            {search && (
              <List sx={{ bgcolor: 'background.paper', maxWidth: 360, width: '100%' }}>
                {data?.films?.map(film => (
                  <ListItem key={film.filmId}>
                    <ListItemAvatar>
                      <Avatar>
                        <img alt={'image'} className={s.header__image} src={film.posterUrl} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={film.nameRu}
                      secondary={film.year}
                      sx={{ color: 'black' }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </List>
        )}
        <button className={'header__login'}>Войти</button>
      </div>
    </Block>
  )
}
