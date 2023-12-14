import { useState } from "react"

const Image = ({ img = [] }) => {

    const [thumbnail, setThumbnail] = useState(img[0])
  
    return (
      <div className="image-container">
        <div className="image mb-5 d-flex justify-content-center">
          <img src={thumbnail} alt="image" width="300px" height="300px" />
        </div>
  
        <div className="d-flex overflow-x-scroll gap-2">
          {img.map((image, index) => {
            return (<img src={image} alt="image" width="100px" height="100px" key={index}
              onClick={() => setThumbnail(image)}
            />)
          })}
        </div>
      </div>
    )
}

export default Image