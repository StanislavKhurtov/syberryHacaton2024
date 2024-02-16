import { useParams } from 'react-router-dom'

import { useGetFilmsQuery } from '@/app/services/baseApi'

export const MovieDetailsPage = () => {
  const { id } = useParams()
  const { data } = useGetFilmsQuery({ id: id || '' })

  return (
    <div>
      <img alt={'image'} src={data?.posterUrl} />
      <h1>{data?.nameRu}</h1>
      <p>{data?.year}</p>
    </div>
  )
}
