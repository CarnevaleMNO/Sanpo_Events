export const HikeEvents = [
  {
    id: 1,
    name: 'Hike 1',
    date: '10/10/2019',
    time: '10:00',
    location: 'Melbourne',
    country: "Australia",
    description: 'Hike 1 Description',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    featured: true,
    slug: 'hike-1',
    information: "",
  },
  {
    id: 2,
    name: 'Hike 2',
    date: '10/10/2020',
    time: '10:00',
    location: 'Yokohama',
    country: "Japan",
    description: 'Hike 2 Description',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    featured: false,
    slug: 'hike-2',
    information: "",
  },
    {
    id: 3,
    name: 'Hike 3',
    date: '10/10/2021',
    time: '10:00',
    location: 'Cleveland',
    country: "USA",
    description: 'Hike 3 Description',
    image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    featured: false,
    slug: 'hike-3',
    information: "",
    },
]

export const getHikeEvent = (slug) => {
  return HikeEvents.find((event) => event.slug === slug)
}

export const getFeaturedHikeEvents = () => {
  return HikeEvents.filter((event) => event.featured)
}

export const getQueriedHikeEvents = (query) => {
  return HikeEvents.filter((event) => event.country === query)
}

