import { getUser } from '../lib/mock'

export default async function Profile() {
  const u = await getUser()
  return (
    <main>
      <h2>Profil</h2>
      <p><b>Kullanıcı:</b> {u.name}</p>
      <p><b>Seviye:</b> {u.level}</p>
      <p><b>Puan:</b> {u.points}</p>
      <h3>Son Katılımlar</h3>
      <ul>
        {u.entries.map(e => <li key={e.id}>{e.title} — +{e.reward}p</li>)}
      </ul>
    </main>
  )
}
