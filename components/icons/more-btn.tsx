import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <Rect
      width={25}
      height={25}
      x={0.5}
      y={0.5}
      fill={props.color ?? '#262C45'}
      rx={12.5}
    />
    <Rect
      width={25}
      height={25}
      x={0.5}
      y={0.5}
      stroke={props.color ?? '#262C45'}
      rx={12.5}
    />
    <Path
      fill={props.color ?? '#fff'}
      d="M8.414 11.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M14.414 11.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M20.414 11.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828"
    />
  </Svg>
);
export const MoreBtn = memo(SVG);
MoreBtn.displayName = 'MoreBtn';
