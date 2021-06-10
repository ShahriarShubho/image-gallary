import React from 'react';

const ImageCard = ({image}) => {

   const  {largeImageURL, downloads, views, likes, user, tags} = image;
   const imageTags = tags.split(',')
    return (
        <div className="max-w-sm rounded shadow-lg overflow-hidden">
        <img src={largeImageURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <h4 className="text-purple-500 mb-2 font-bold">Phots by {user}</h4>
        </div>
        <ul>
          <li>
            <strong className="ml-2">Downloads : </strong>
            {downloads}
          </li>
          <li>
            <strong className="ml-2">Views : </strong>
            {views}
          </li>
          <li>
            <strong className="ml-2">Likes : </strong>
            {likes}
          </li>
        </ul>
        <div className="inline-block m-2 p-2">
            {
                imageTags.map(tag =>
                    <span className="font-semibold text-sm bg-gray-300 p-2 rounded-full mx-2">#{tag}</span>
                    )
            }
        </div>
       </div>
    );
};

export default ImageCard;