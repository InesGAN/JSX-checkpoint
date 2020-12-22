import logo from './logo.svg';
import './App.css';
import imageInSrc from "./imageInSrc.PNG"

import myVideo from "./myVideo.mp4"
function App() {
  return (
    <div className="App">
      <div className="pageapp">
        <div className="div1" style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <div  className="div2" > <h1 className="title red">Ines GANNOUN</h1></div>
          <br />
           <div className="div3" >
          <img src={imageInSrc} height={240}/>
          <br />
           </div>
           <img src="../mesimages/imageInPublic.PNG" alt='imageinpublic' style={{width:100,height:30}} />
          <video width={320} height={240} controls>
          <source src={myVideo} type="video/mp4" />
        </video>
        </div>
        
      </div>
    </div>
  );
}

export default App;
