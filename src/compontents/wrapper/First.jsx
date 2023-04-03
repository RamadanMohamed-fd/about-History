import React,{useEffect,useState} from 'react'

import classes from './first.module.css'
const First = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  return (
    <section className={classes.section__first}>
    <div className={classes.section__inner}>
      <div className={classes.section_lines_desktop__vertical_line} 
      style={{height:`${offset-600}px`}}></div>
      {offset > 994&&<div className={classes.section_lines_desktop__horizontal_line}></div>}
    </div>
  
  </section>
  )
}

export default First