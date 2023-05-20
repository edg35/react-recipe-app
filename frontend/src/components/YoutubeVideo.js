import React from 'react'

const YoutubeVideo = ({ str }) => {

  const id = str.substring(str.indexOf('=') + 1);

  return (
    <>
        <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameborder='0'
            width='100%'
            height='100%'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title='video'
        />
    </>
  )
}

export default YoutubeVideo