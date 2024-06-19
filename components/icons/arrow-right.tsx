import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <G clipPath="url(#arrow-right_svg__a)">
      <Path
        fill={props.color ?? '#fff'}
        d="M9.427 11.656a.494.494 0 0 1-.705 0 .5.5 0 0 1 0-.699L12.3 7.38H.494A.49.49 0 0 1 0 6.886c0-.276.219-.501.494-.501H12.3L8.722 2.814a.507.507 0 0 1 0-.706.494.494 0 0 1 .705 0l4.425 4.425a.486.486 0 0 1 0 .698z"
      />
    </G>
    <Defs>
      <ClipPath id="arrow-right_svg__a">
        <Path fill={props.color ?? '#fff'} d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export const ArrowRight = memo(SVG);
ArrowRight.displayName = 'ArrowRight';
