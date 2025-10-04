import React from 'react'

const Card = (props) => {
  const {
    title,
    description,
    image,
    footer,
    className = '',
  } = props

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 ${className}`}>
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-4">
        {title && (
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 mb-4">
            {description}
          </p>
        )}
      </div>

      {footer && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card