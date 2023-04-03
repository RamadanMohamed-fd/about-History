import React from 'react'
import classes from "../intro/intro.module.css"
import cover_bottom from '../../assats/cover-bottom.png'
const Intro = () => {
  return (
    <section className={classes.intro}>
       <div className={classes.intro__bottom_outer}>
        <img className={classes.intro__bottom } src={cover_bottom} alt='' />
       </div>
       <div className={classes.intro__content}>
        <span className={classes.intro__content_line}></span>
        <div className={classes.intro__content_text}>
          <div className={classes.text_block}>
            <h2 className={classes.text_block__title}>
              THERE WAS NO INTERNET AND NO BIG MAC</h2>
            <p>The world was very different when Hanwag was founded in 1921. Two billion people lived on the planet. There was no Internet and no Big Mac. Cars looked completely different and none of the eight-thousanders had been climbed. However, then as now, people needed good footwear. And although boots and shoes have changed considerably over the last one hundred years, Hanwag and its employees have the same aim to this day: to make the best footwear possible.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro