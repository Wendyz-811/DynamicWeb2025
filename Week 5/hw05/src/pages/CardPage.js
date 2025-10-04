import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const CardPage = () => {
  const cards = [
    {
      id: 1,
      title: 'Mountain View',
      description: 'Beautiful mountain landscape with clear blue sky.',
      image: '/images/mountain.jpg'
    },
    {
      id: 2,
      title: 'Ocean View',
      description: 'Peaceful ocean view with gentle waves.',
      image: '/images/ocean.jpg',
    },
    {
      id: 3,
      title: 'Forest View',
      description: 'A serene path through the green forest.',
      image: '/images/forest.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Card Component Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  )
}

export default CardPage