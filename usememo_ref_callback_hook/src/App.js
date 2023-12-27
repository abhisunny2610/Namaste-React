import './App.css';
import Carousel from './Carousel';
import img1 from './Image/party10.jpg'
import img2 from './Image/party8.jpg'
import img3 from './Image/party9.jpg'
import img4 from './Image/pexels-juan-pablo-serrano-arenas-877971.jpg'


function App() {
  const Images = [img1, img2, img3, img4]

  return (
    <div className="App">
      <Carousel image={Images} />
    </div>
  );
}

export default App;
