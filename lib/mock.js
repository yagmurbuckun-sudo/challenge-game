export async function getUser() {
  return {
    id: 'u1',
    name: 'Demo Kullanıcı',
    level: 2,
    points: 240,
    entries: [
      { id: 'e1', title: '10.000 Adım', reward: 50 },
      { id: 'e2', title: 'Günlük 2L Su', reward: 20 },
    ]
  }
}

export async function getChallenges() {
  return [
    { id: 'c1', title: '10.000 Adım', description: 'Bugün 10.000 adım at', reward: 50, target: '10k steps' },
    { id: 'c2', title: '50 Squat', description: 'Gün içinde 50 squat tamamla', reward: 40, target: '50 reps' },
    { id: 'c3', title: '3L Su', description: 'Bugün toplam 3 litre su iç', reward: 30, target: '3 liters' },
  ]
}

export async function getChallengeById(id) {
  const list = await getChallenges()
  return list.find(x => x.id === id)
}
