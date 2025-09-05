export const metadata = {
  title: 'Challenge+Game',
  description: 'Challenge + oyunlaştırma MVP'
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{fontFamily:'system-ui', margin:0}}>
        <div style={{padding:16, borderBottom:'1px solid #eee', display:'flex', gap:12}}>
          <a href="/">Ana Sayfa</a>
          <a href="/challenges">Challenge'lar</a>
          <a href="/profile">Profil</a>
        </div>
        <div style={{padding:24}}>{children}</div>
      </body>
    </html>
  )
}
