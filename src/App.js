import React, { useEffect, useState } from 'react';
import ImageCard from './Components/ImageCard/ImageCard';
import SearchImage from './Components/SearchImage/SearchImage';

function App() {
  const [images, setImages] = useState([])
  const [term, setTerm] = useState('')
  const [isLoading, setIsloading] = useState(true)


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22024005-f110f57eb240415b69962f8c9&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsloading(false)
    })
    .catch(err =>console.log(err))
  }, [term])


  return (
    <div className="container mx-auto">
      <SearchImage searchText={(text) => setTerm(text)}/>
      {isLoading ? (<h2 className="text-4xl mx-auto text-center pt-12">Loading.....</h2>): (<div className="grid grid-cols-3 gap-4">
      {
        images.map(img => <ImageCard image={img} key={img.id}></ImageCard>)
      }
      </div>) }
    </div>
  );
}

export default App;
