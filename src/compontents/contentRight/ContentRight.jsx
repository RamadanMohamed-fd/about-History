import React,{useEffect,useState} from 'react'
import classes from './cR.module.css';
import image from '../../assats/hangwag-1921-768x647.png'

const ContentRight = (props) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  return (
    <div className={classes.content} >
          {offset>props.x +100&&  <div className={classes.content_image}>
            <img src={props.data.image} alt="" />
        </div>}
        {offset>props.x +100&& <div className={classes.content_text}>
            <h1>{props.data.header}</h1>
            <p>{props.data.p}</p>
        </div>}
      
    </div>
  )
}

export default ContentRight