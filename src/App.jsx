
import './App.css';
import Slide from './Slide';
import Panel from './Panel';
import { useState } from 'react';


    function App() {

      const[cur, setCur] = useState(0);
      

      let slides =[
        {
          'img':'url(img/img1.jpg)' ,
          'text':'Водопад с цветами ',
        },

        {
          'img':'url(img/img2.jpg)' ,
          'text':'Лесной водопад',
        },

        {
          'img':'url(img/img3.jpg)' ,
          'text':'Водопад с радугой',
        },

        {
          'img':'url(img/img4.jpeg)' ,
          'text':'Осенний водопад',
        },

        {
          'img':'url(img/img5.jpg)' ,
          'text':'Зимний водопад',
        },
      ]

      function swipeSlide(n){
        //r
        let result = cur + n;
        if(result === slides.length){
          setCur(0);
        }
        //l
        else if(result === -1){
          setCur(slides.length - 1)
       }
        else{
        setCur(result);
        }
      }
      function krugi(n){
        setCur(n);
      }

  return (
    <div>
      <Slide img={slides[cur].img} text={slides[cur].text} click={swipeSlide}></Slide>

      <Panel sl = {slides} cur={cur} change={krugi}></Panel>
    </div>
  );
}

export default App;
