import React from 'react';

const Music = () => {
  return (
    <div className="text-white p-6 w-full ">
      <iframe
        className='mb-10'
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/3h5YZTfJ4BBpvLVHS6lGUl?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        className='mb-10'
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/0mtS8143MsPJfSM9fvFUhO?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/0XprgFKfXIDkgHZ4iYVIjk?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      
    </div>
  );
};

export default Music;
