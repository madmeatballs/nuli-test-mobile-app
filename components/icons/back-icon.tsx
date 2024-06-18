import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color ?? '#262C45'}
      d="M7.839 3.614a.847.847 0 0 1 1.21 0 .853.853 0 0 1 0 1.197l-6.134 6.133h20.238c.472 0 .847.376.847.848a.85.85 0 0 1-.847.859H2.915l6.133 6.121a.87.87 0 0 1 0 1.21.847.847 0 0 1-1.21 0L.255 12.397a.833.833 0 0 1 0-1.198z"
    />
  </Svg>
);
export const BackIcon = memo(SVG);
BackIcon.displayName = 'BackIcon';
