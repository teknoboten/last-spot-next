import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Home() {
  const { data: session } = useSession()
  const [list, setList] = useState([])

  // const getMyPlaylists = async () => {
  //   const res = await fetch('/api/playlists')
  //   const { items } = await res.json()
  //   setList(items)
  // }

  const getMyAlbums = async () => {
    const res = await fetch('/api/albums')
    const { items } = await res.json()
    await console.log({ items })
    setList(items)
  }

  if (session) {
    return (
      <div className={styles.main}>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <br />
        {/* <div>
          <button onClick={() => getMyPlaylists()}>Get all my playlists</button>
          {list.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.images[0]?.url} width="100" />
            </div>
          ))}
        </div> */}
        <div>
          <button onClick={() => getMyAlbums()}>Get all my albums</button>
          {list.map((item) => (
            <div key={item.album.id}>
              <h1>{item.album.name}</h1>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

//   if (session) {
//     return (
//       <>
//         Signed in as {session?.token?.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const data = await fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds",
//   {
//     headers:{
//       Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`
//     }
//   }).then(response => response.json());

//   console.log(data);

//   return {
//     props: {
//       genres: data.genres
//     },
//     revalidate: 60
//   }
// }
