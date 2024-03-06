import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoadimage from '../assets/LoadingImage.webp'
import Skeleton from './Skeleton';


export default function LoadImage({alt, src, style, height}) {
  return (
    <Skeleton height={height}>
      <LazyLoadImage
    alt={alt}
    // effect="blur"
    src={src}
    width="100%"
    height="100%"
    className={`w-full ${style}`}
    placeholderSrc={LazyLoadimage}
   />
    </Skeleton>
    
  )
}
