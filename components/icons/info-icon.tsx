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
    <G fill={props.color ?? '#262C45'} clipPath="url(#info-icon_svg__a)">
      <Path d="M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m0 12.727A5.734 5.734 0 0 1 1.273 7 5.734 5.734 0 0 1 7 1.273 5.734 5.734 0 0 1 12.727 7 5.734 5.734 0 0 1 7 12.727" />
      <Path d="M7 2.97a.85.85 0 0 0 0 1.697.85.85 0 0 0 0-1.697M7 5.94a.636.636 0 0 0-.636.636v3.818a.636.636 0 1 0 1.272 0V6.576A.636.636 0 0 0 7 5.939" />
    </G>
    <Defs>
      <ClipPath id="info-icon_svg__a">
        <Path fill={props.color ?? '#fff'} d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export const InfoIcon = memo(SVG);
InfoIcon.displayName = 'InfoIcon';
