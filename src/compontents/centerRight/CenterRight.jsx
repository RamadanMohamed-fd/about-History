import React,{useEffect,useState} from 'react'
import clasess from './centerRight.module.css'
const CenterRight = (props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      console.log(offset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={clasess.section_lines_desktop}>
    {offset>props.x &&<div className={clasess.section_lines_desktop__vertical_line} style={{height:`${offset-props.x}px`}}>1</div>}
  
  <div className={`${clasess.section_year} ${clasess.section_year__desktop}`}>
      {offset >props.x + 200&&<div className={clasess.section_year__title}><span>Y</span><span>e</span><span>a</span><span>r</span></div>}
     {offset >props.x + 200&& <div className={clasess.section_year__numbers}>
        <span>{props.data[0]}</span>
        <span>{props.data[1]}</span>
        <span>{props.data[2]}</span>
        <span>{props.data[3]}</span>
      </div>}
  
  </div>
  <div className={clasess.section_lines_desktop__vertical_line_v} style={{height:`${offset-(props.x + 150)}px`}}></div>
  <div className={`${clasess.section_lines_desktop__vertical_line_v} ${clasess.section_lines_desktop__vertical_line_v2}`} style={{right:`155px`,height:`${offset-(props.x + 150)}px`}}></div>
  { offset >props.x+50&&<div className={clasess.section_lines_desktop__horizontal_line}></div>}
  {offset >props.x+400&&<div className={`${clasess.section_lines_desktop__horizontal_line} ${clasess.l2}`} style={{top:`565px`}}></div>}
  {offset >props.x+400&&<div className={`${clasess.section_lines_desktop__vertical_line_v} ${clasess.v2}`} style={{height:`${offset-(props.x+350)}px` }}></div>}
  {offset >props.x+600&&<div className={`${clasess.section_lines_desktop__horizontal_line} ${clasess.h2}`} ></div>}
  
  </div>
  )
}

export default CenterRight