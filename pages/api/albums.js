// import {getUsersPlaylists} from '../../lib/spotify';
import { getUsersAlbums } from '../../lib/spotify'
import { getSession } from 'next-auth/react'
// import { useSession } from 'next-auth/react'

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req })
  const response = await getUsersAlbums(accessToken)
  const { items } = await response.json()
  // const items = await response.json()
  // await console.log(items)

  return res.status(200).json({ items })
  // return res.status(200).json(...items)
}

export default handler

// const handler = async (req, res) => {
//   const {
//     token: { accessToken },
//   } = await getSess
// }
