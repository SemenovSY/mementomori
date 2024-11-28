import { useEffect, type FC } from 'react';

import styles from './styles.module.scss';
import { useResize } from '../../../../hooks';

interface IProgressCircleProps {
  progress: number;
}

const SVG_ID = 'svg'
const BAR_ID = 'bar'
const RADIUS_PERCENT = 44

const calculateDasharray = (progress: number) => {
  let val;

  const svg = document.getElementById(SVG_ID);
  const bar = document.getElementById(BAR_ID);

  if(!(bar && svg)) {
    return
  }

  const radius = (svg?.clientWidth || 0 ) * RADIUS_PERCENT / 100;

  const c = Math.PI * (radius * 2);

  if (progress < 0) {
    val = 0;
  } else if (progress > 100) {
    val = 100;
  } else {
    val = progress
  }

  const dashOffset = ((100 - val) / 100) * c;

  bar.setAttribute('stroke-dasharray', c.toString())
  bar.setAttribute('stroke-dashoffset', dashOffset.toString())
}

const ProgressCircle: FC<IProgressCircleProps> = ({ progress }) => {
  const { width } = useResize();

  useEffect(() => {
    calculateDasharray(progress)
  }, [width])
  

  return (
    <svg id={ SVG_ID } width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle r={ `${ RADIUS_PERCENT }%` } cx="50%" cy="50%" stroke="#757575" strokeWidth="12" fill="transparent"></circle>
      <circle id={ BAR_ID } r={ `${ RADIUS_PERCENT }%` } cx="50%" cy="50%" stroke="#fbfbfb" strokeWidth="12px" strokeLinecap="round" fill="transparent" strokeDasharray="0" strokeDashoffset="0" className={ styles.bar }></circle>
    </svg>
  )
}

export default ProgressCircle