import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'

import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'

export const pagLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 3, href: '#tours', text: 'tours' }
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' }
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-tree fa-fw',
    title: 'service - title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia'
  },
  {
    id: 2,
    icon: 'fas fa-wallet fa-fw',
    title: 'service - title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia'
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'service - title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia'
  }
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'october 1th, 2020',
    title: 'explore hong kong',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumtae tempore voluptatum maxime reprehenderit eum quod,exercitationem fugit, qui corporis.',
    price: 'from $1400',
    location: 'hong kong',
    duration: 6,
    location: 2100
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'Tibet Adventure',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumtae tempore voluptatum maxime reprehenderit eum quod,exercitationem fugit, qui corporis.',
    price: 'from $1400',
    location: 'China',
    duration: 6,
    location: 4600
  },
  {
    id: 3,
    image: tour3,
    date: 'october 1th, 2020',
    title: 'explore Javas',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumtae tempore voluptatum maxime reprehenderit eum quod,exercitationem fugit, qui corporis.',
    price: 'from $1400',
    location: 'hong kong',
    duration: 8 ,
    location: 5000
  },
  {
    id: 4,
    image: tour4,
    date: 'December 5th, 2020',
    title: 'Kenya highlight',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumtae tempore voluptatum maxime reprehenderit eum quod,exercitationem fugit, qui corporis.',
    price: 'from $1400',
    location: 'kenya',
    duration: 20,
    location: 3300
  }
]
