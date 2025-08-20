import React from 'react'
import LandingPage from '../components/LangingPage'
import Card from '../components/Card'
import ParentCard from '../components/CityHighlights'
import RecentBlogPosts from '../components/RecentBlogPosts'

const MeerutHeritage = () => {
  const blogPosts = [
  {
    id: 1,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/9042778701-4c614b370688032eb40f.png',
    alt: 'Meerut Cantonment British colonial architecture heritage buildings',
    authorImage: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
    authorName: 'Sarah Mitchell',
    date: '2 days ago',
    title: 'The Colonial Legacy of Meerut Cantonment',
    description: 'Exploring the British-era architecture and its historical significance...',
    readTime: 5,
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d6353970d0-4ba53fbb210eac80b35b.png',
    alt: 'Meerut 1857 revolt memorial historical significance India freedom struggle',
    authorImage: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
    authorName: 'Raj Patel',
    date: '4 days ago',
    title: '1857: The Spark of Revolution',
    description: `How Meerut became the starting point of India's first war of independence...`,
    readTime: 7,
    likes: 42,
    comments: 15,
  },
  {
    id: 3,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f003176285-067c167906a5765207db.png',
    alt: 'Meerut local food culture traditional sweets and cuisine',
    authorImage: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg',
    authorName: 'Priya Sharma',
    date: '1 week ago',
    title: 'A Culinary Journey Through Meerut',
    description: 'Discovering the traditional flavors and famous sweets of the city...',
    readTime: 6,
    likes: 38,
    comments: 12,
  },
];

// In your render:
<RecentBlogPosts posts={blogPosts} />

  return (
    <>
      <LandingPage />
      <ParentCard children={Card}/>
      <RecentBlogPosts posts={blogPosts}/>

    </>
  )
}

export default MeerutHeritage