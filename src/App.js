import './App.css';
import CenterLeft from './compontents/centerLeft/CenterLeft';
import CenterRight from './compontents/centerRight/CenterRight';
import Intro from './compontents/intro/Intro';
import Landing from './compontents/landing/Landing'
import First from './compontents/wrapper/First';
import Content from './compontents/wrapper/Content';
import ContentRight from './compontents/contentRight/ContentRight';
import image0 from './assats/hangwag-1921-768x647.png';
import image1 from './assats/hangwag-1940.png';
import image2 from './assats/hangwag-1956.png';
import image3 from './assats/hangwag-1964.png';
import image4 from './assats/hangwag-1970.png';
import image5 from './assats/hangwag-1996.png';
import image6 from './assats/hangwag-2004.png';
import image7 from './assats/hangwag-2013.png';


function App() {
  const Data=[
    {
      header:'FIRST STEPS',
      image:image0,
      year:'1940',
      p:'In house number 56 of the small village of Vierkirchen (1,100 inhabitants), Hans Wagner, the son of a shoemaker, opens his own shoemaking workshop. Not happy with the customary way of working at the time – directly in customers’ homes – he starts making footwear on his own premises, including lightweight mountain boots for the “Reiter” shoe factory in Munich. In addition, he begins selling work shoes. This is the same year that the first British reconnaissance expedition leaves to explore the vicinity of Mount Everest and the polar explorer Ernest Shackleton starts his final Antarctic expedition, though not wearing Hanwag boots. Albert Einstein receives the Nobel prize in physics.'
    },
    {
      header:'ON THE UP',
      image:image1,
      year:'1956',
      p:'His double-stitched shoes are in such demand that Hans Wagner takes on four apprentices. He builds house number 57 in Vierkirchen and expands it three years later by adding a larger workshop. He doesn’t have any sports shops on his books yet. However, there are big orders of five or even ten pairs of boots for customers. Elsewhere in the world: MAN develops the first vehicle with a diesel engine, Adolf Hitler’s Munich Putsch fails, Kemal Atatürk founds the Republic of Turkey. Loriot, Horst Tappert and Richard Attenborough are all born this year.'
    },
    {
      header:'SKI BOOTS WITH LACES',
      image:image2,
      year:'1964',
      p:'Hans Wagner’s nephew, Sepp Wagner, who is later to become managing director, starts in his uncle’s factory and learns the art of handcrafted shoemaking from 1936 to 1939. They’re already making leather boots with a square toe and laces for the increasingly popular sport of skiing. Alpine skiing is included in the Winter Olympics for the first time in Garmisch-Partenkirchen. Hitler uses the sporting event for self-promotion and does the same six months later at the Summer Olympics in Berlin. Toni Kurz and Andreas Hinterstoisser tragically perish on the still unclimbed North Face of the Eiger.'
    },
    {
      header:'THE MACHINE AGE',
      image:image3,
      year:'1970',
      p:'Double stitching is now carried out using machinery rather than by hand. Production output is high, but many shoemakers are enlisted and sent to war. Boots are made for marching, rather than hiking.'
    },
    {
      header:'TRANSATLANTIC RELATIONSHIPS',
      image:image4,
      year:'1996',
      p:'Hanwag exhibits for the first time at a sports equipment trade fair in Wiesbaden. Josef “Sepp” Wagner meets Klaus Obermeyer, a sports equipment producer and ski instructor who has emigrated to the US. He becomes a long-standing retail partner for Hanwag ski boots. In general, it is a period for other firsts and close transatlantic relationships: Lhotse (8516 metres) sees its first ascent, Borussia Dortmund wins the German football league for the first time and the German national lottery introduces the bonus number. Marilyn Monroe marries Arthur Miller and Grace Kelly marries Prince Rainier III of Monaco.'
    },
    {
      header:'NEPHEW AT THE HELM',
      image:image5,
      year:'2004',
      p:'Josef Wagner takes over management of the family company and delivers some 10,000, handmade “Garmisch” ski boots to the United States. And what does the US deliver in return? The film Mary Poppins is produced, Michelle Obama is born and Cassius Clay, aka Muhammad Ali, wins his first world championship title.'
    },
    {
      header:'HIGH ALPINE',
      image:image6,
      year:'2013',
      p:'Hanwag produces the first ever ski boot for ski touring – complete with inner boot and buckle closure. The “Haute Route” remains state of the art for ski touring boots for nearly ten years. Other developments last even longer: The Bavarian Forest becomes Germany’s first national park, Tonga declares independence from Great Britain and the high-profile German television news service “Tagesschau” is broadcast in colour.'
    },
    {
      header:'AN ABSOLUTE CLASSIC',
      image:image7,
      year:'2021',
      p:'The Alaska GTX mountain boot is launched and marks the beginning of a long partnership with Gore. The boot is still available today. Other well-known classics include the film “The English Patient”, Oliver Bierhoff’s golden goal that won Germany its third European Championship title in football and a 408 km/h tornado on Barrow Island. Commercial expeditions to Mount Everest fall into disrepute after eight climbers die.'
    },
  ]
  let h1=1000;
  let r=750;
  return (
    <div className='app'>
   <Landing/>
   <Intro/>
   <div className='section_wrapper'>
    <First/>

    <section className="section section--center-left">
    <CenterLeft x={h1} data={Data[0].year}/>
     <Content x={h1} data={Data[0]}/>
    </section> 
    <section className="section section--center-left s">
    <CenterRight x={h1+r} data={Data[1].year}/>
   <ContentRight x={h1+r} data={Data[1]}/>
    </section> 

    <section className="section section--center-left left2">
    <CenterLeft x={h1+r*2} data={Data[2].year}/>
     <Content x={h1+r*2} data={Data[2]}/>
    </section> 
    <section className="section section--center-left s2">
    <CenterRight x={h1+r*3} data={Data[3].year}/>
   <ContentRight x={h1+r*3} data={Data[3]}/>
    </section> 

  
    <section className="section section--center-left left3">
    <CenterLeft x={h1+r*4} data={Data[4].year}/>
     <Content x={h1+r*4} data={Data[4]}/>
    </section> 
    <section className="section section--center-left s3">
    <CenterRight x={h1+r*5} data={Data[5].year}/>
   <ContentRight x={h1+r*5} data={Data[5]}/>
    </section> 

    <section className="section section--center-left left4">
    <CenterLeft x={h1+r*6} data={Data[6].year}/>
     <Content x={h1+r*6} data={Data[6]}/>
    </section> 
    <section className="section section--center-left s4">
    <CenterRight x={h1+r*7} data={Data[7].year}/>
   <ContentRight x={h1+r*7} data={Data[7]}/>
    </section> 

   </div>
    </div>
  );
}

export default App;
