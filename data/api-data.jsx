export const getAllHikes = async () => {
  const Hikes = await fetch(
    'https://sanpo-trails-default-rtdb.firebaseio.com/trails.json'
  ).then((res) => res.json())

  const transformedHikes = Object.keys(Hikes).map((key) => {
    return Hikes[key]
  })

  return transformedHikes
}

export const getFeaturedHikes = async () => {
  const Hikes = await fetch(
    'https://sanpo-trails-default-rtdb.firebaseio.com/trails.json'
  ).then((res) => res.json())

  const transformedHikes = Object.keys(Hikes).map((key) => {
    return Hikes[key]
  })
  const featuredHikes = transformedHikes.filter(
    (hike) => hike.featured === true
  )

  return featuredHikes
}

export const getTrailById = async (id) => {
  const Hikes = await fetch(
    `https://sanpo-trails-default-rtdb.firebaseio.com/trails.json`
  ).then((res) => res.json())

  const transformedHikes = Object.keys(Hikes).map((key) => {
    return Hikes[key]
  })
  const singleTrail = transformedHikes.filter((hike) => hike.id === id)

  return singleTrail
}

export const getTrails = async (country) => {
  const Hikes = await fetch(
    `https://sanpo-trails-default-rtdb.firebaseio.com/trails.json`
  ).then((res) => res.json())

  const transformedHikes = Object.keys(Hikes).map((key) => {
    return Hikes[key]
  })
  const filteredHikes = transformedHikes.filter((hike) => hike.country === country)

  return filteredHikes
}
