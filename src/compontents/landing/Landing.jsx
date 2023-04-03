import { useEffect,useState } from 'react';
import classes from './landing.module.css';
import cover__image from '../../assats/cover-1024x577.jpg';
import hanwag_cover_subtitle from '../../assats/hanwag-cover-subtitle.png'
import hanwag_cover_shoes from '../../assats/hanwag-cover-shoes.png';

const Landing = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={classes.cover } >
        <div className={classes.cover_outer_image}>
        <picture >
        <img className={classes.cover__image} src={cover__image} alt="" 
        style={{opacity:`${offset > 0?0.5:0.8}`}}
        />
        </picture>
        </div>
    <div className={classes.cover__main}>
        <div className={classes.cover__header}>
          <h1 className={classes.cover__header_title}  >Ramadan</h1>
          <img className={classes.cover__header_subtitle} src={hanwag_cover_subtitle} alt="hanwag-cover-subtitle" />
            <div className={classes.cover__header_illustrations}>
              <img  src={hanwag_cover_shoes} alt="hanwag-cover-shoes" />
            </div>
        </div>
    </div>
  
    </section>
  
  )
}

export default Landing