# Challenge+Game Starter (Web – Next.js)

Bu iskelet; **Next.js (App Router)** ile basit bir challenge/oyunlaştırma uygulamasının temelini içerir.
- Kullanıcı oturumu (mock)
- Challenge listesi/katılma
- Basit puanlama mantığı
- Prisma şeması (User, Challenge, Entry)
- Docker ile lokal çalıştırma

## Hızlı Başlangıç (Seçenek A: GitHub Codespaces — en kolay)
1) Bu klasörü GitHub’a yükle.
2) Repo sayfasında **Code → Codespaces → Create codespace**.
3) Terminalde:
```bash
npm install
npm run dev
```
4) Uygulama: http://localhost:3000

## Hızlı Başlangıç (Seçenek B: Yerel — Windows/Mac)
- Node.js 18+ kur.
```bash
npm install
npm run dev
```
http://localhost:3000

## Docker ile
```bash
docker compose up --build
```
- App: http://localhost:3000

## Veritabanı
- `prisma/schema.prisma` içinde **User**, **Challenge**, **Entry** örnekleri var.
- Hızlı MVP’de local JSON/Mock ile çalışabilirsiniz. Postgres kullanacaksanız:
  - SUPABASE oluştur → .env içine `DATABASE_URL` koy.
  - `npm run prisma:migrate`

## Deploy
- **Vercel**’e doğrudan bağlayabilir, Supabase ile eşleyebilirsiniz.
- En hızlı gelir: Ücretsiz planlarla MVP yayına alın, ödeme/sponsor özelliklerini sonra ekleyin.
