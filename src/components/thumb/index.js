//Este componente se va a encargar de recibir una imagen dinamica
//(le tengo que pegar a una api), un titulo y un service id
import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

/* class Thumb extends Component {
  constructor(props) {
    super(props);

    this.state = { image: "https://picsum.photos/100" };
  }
  componentDidMount() {
    this.imgID = setInterval(() => {
      this.tickImg();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.imgID);
  }
  tickImg() {
    this.setState({ image: "https://picsum.photos/100?" + Math.random() });
  }
  render() {
    return (
      <div>
        <h4>This is Random IMG:</h4>
        <img src={this.state.image}></img>
      </div>
    );
  }
} */


const Thumb = () => {
  const [image, setImage] = useState('https://picsum.photos/100');

  useEffect(() => {
    setInterval(showImage, 5000);

    return () => {
      clearInterval(showImage)
    }
  }, [image])

  const showImage = () => {
    setImage("https://picsum.photos/100?" + Math.random())
  }

  return (
    <div>
      <h4>This is Random IMG:</h4>
      <img src={image}></img>
    </div>
  );
}

export default Thumb;
