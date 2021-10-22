import React from 'react'
import './App.css';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import 'bootstrap/dist/css/bootstrap.min.css';



const options = {
  settings: {
    overlayColor: "rgb(25, 136, 124)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    border:"10px solid green"
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  }
};

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }

    componentDidMount = () => {
      axios.get
      ("https://api.unsplash.com/search/photos?query=rocket&per_page=40&client_id=3LG8LwNcmXYZQCplMqCw93lAlSu52v2QecSbAe-xWj8")
      .then((response) =>{
      this.setState({
        images:response.data.results
      })
    }).catch((error)=>{
      console.log(error)
    })
  }

  render() {
    return(
    <div className="container">
      <h5 style={{textAlign:"center",marginTop:"10px"}}>Image Gallery</h5>
      <SRLWrapper options={options}>
        <div className="row">
        {this.state.images.map((image)=>
        <div className="col-sm-4 p-4">
          <a href={image.urls.regular}data-attribute="SRL">
          <img src={image.urls.thumb}/>
        </a>
      </div>
    
  )}
  </div>
    </SRLWrapper>
    </div>)
  }
}

export default App;
