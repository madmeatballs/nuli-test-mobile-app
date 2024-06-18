import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      fill={props.color ?? '#F6727B'}
      d="M14.688 1.2c-1.086 0-2.08.344-2.958 1.022-.84.65-1.4 1.479-1.73 2.081-.33-.602-.89-1.43-1.73-2.08A4.74 4.74 0 0 0 5.313 1.2C2.283 1.2 0 3.677 0 6.962c0 3.55 2.85 5.977 7.163 9.653.732.625 1.563 1.332 2.426 2.087a.624.624 0 0 0 .822 0c.864-.755 1.694-1.463 2.427-2.087C17.15 12.939 20 10.51 20 6.962 20 3.677 17.716 1.2 14.688 1.2"
    />
  </Svg>
);
export const HeartIcon = memo(SVG);
HeartIcon.displayName = 'HeartIcon';
