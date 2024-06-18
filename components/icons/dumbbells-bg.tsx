import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 150 150"
    {...props}
  >
    <Path
      fill={props.color ?? '#5EBADE'}
      fillOpacity={0.1}
      d="M113.548 77.376c19.923 0 36.129 16.215 36.129 36.148s-16.206 36.148-36.129 36.148-36.129-16.215-36.129-36.148 16.207-36.148 36.129-36.148m0 67.132c17.077 0 30.968-13.899 30.968-30.984S130.625 82.54 113.548 82.54 82.581 96.44 82.581 113.524s13.891 30.984 30.967 30.984"
    />
    <Path
      fill={props.color ?? '#5EBADE'}
      fillOpacity={0.1}
      d="M113.548 92.868c11.384 0 20.646 9.267 20.646 20.656s-9.262 20.656-20.646 20.656c-11.383 0-20.645-9.267-20.645-20.656s9.262-20.656 20.645-20.656m0 36.148c8.54 0 15.484-6.948 15.484-15.492s-6.944-15.492-15.484-15.492-15.484 6.948-15.484 15.492 6.945 15.492 15.484 15.492"
    />
    <Path
      fill={props.color ?? '#5EBADE'}
      fillOpacity={0.1}
      d="m2.58 117.619 6.674-6.677-4.093-4.095a8.76 8.76 0 0 1-2.58-6.233c0-2.355.916-4.57 2.58-6.233l4.093-4.095-1.512-1.513a8.76 8.76 0 0 1-2.58-6.233c0-2.355.915-4.57 2.58-6.233l6.674-6.677c3.326-3.33 9.132-3.33 12.459 0L38.71 81.471l42.802-42.825-11.835-11.841a8.75 8.75 0 0 1-2.58-6.233c0-2.355.916-4.57 2.58-6.233l6.674-6.677c3.326-3.33 9.133-3.33 12.46 0l1.512 1.513 4.093-4.095c3.326-3.33 9.132-3.33 12.459 0l4.093 4.095 6.673-6.677c3.327-3.33 9.133-3.33 12.46 0l11.834 11.841a8.75 8.75 0 0 1 2.581 6.233c0 2.355-.916 4.57-2.581 6.233l-6.673 6.677 4.093 4.095a8.76 8.76 0 0 1 2.58 6.233c0 2.355-.916 4.57-2.58 6.233l-4.093 4.095 1.512 1.513a8.75 8.75 0 0 1 2.581 6.233c0 2.355-.916 4.57-2.581 6.233l-3.424 3.426C149.074 79 160 94.988 160 113.524 160 139.15 139.161 160 113.548 160c-18.526 0-34.505-10.932-41.958-26.664l-3.425 3.426a8.75 8.75 0 0 1-6.23 2.582 8.75 8.75 0 0 1-6.23-2.582l-1.511-1.513-4.093 4.095a8.75 8.75 0 0 1-6.23 2.582 8.75 8.75 0 0 1-6.23-2.582l-4.093-4.095-6.673 6.677a8.75 8.75 0 0 1-6.23 2.582 8.75 8.75 0 0 1-6.23-2.582L2.582 130.085A8.76 8.76 0 0 1 0 123.852c0-2.355.916-4.57 2.58-6.233M42.36 85.122l16.996 17.005 20.59-20.602a46 46 0 0 1 1.622-1.621l20.59-20.602-16.996-17.005zm24.913 24.927c.271-3.641.927-7.173 1.99-10.532l-6.258 6.261zm38.534-47.096-6.258 6.261c3.36-1.063 6.891-1.72 10.527-1.99zm32.48-39.799a3.68 3.68 0 0 0 1.069-2.582c0-.96-.39-1.903-1.069-2.582L126.452 6.15c-1.358-1.358-3.804-1.358-5.162 0l-6.673 6.677 16.996 17.005zm-2.58 23.238a3.68 3.68 0 0 0 1.068-2.582c0-.96-.389-1.903-1.068-2.582l-32.48-32.497c-1.358-1.358-3.804-1.358-5.162 0l-4.092 4.095 37.641 37.661zm-2.581 18.074a3.68 3.68 0 0 0 1.069-2.582c0-.96-.39-1.903-1.069-2.582L85.161 11.313c-1.357-1.358-3.804-1.358-5.161 0l-6.674 6.677a3.68 3.68 0 0 0-1.068 2.582c0 .96.39 1.903 1.069 2.582l44.067 44.088a46 46 0 0 1 10.763 2.194zm-19.577 90.37c22.767 0 41.291-18.534 41.291-41.312s-18.524-41.312-41.291-41.312c-10.96 0-20.91 4.325-28.31 11.32L83.573 85.2c-6.991 7.402-11.314 17.358-11.314 28.324 0 22.778 18.524 41.312 41.29 41.312m-49.032-21.725 4.97-4.973a46 46 0 0 1-2.193-10.769L23.226 73.281c-1.358-1.358-3.804-1.358-5.161 0l-6.674 6.677a3.68 3.68 0 0 0-1.068 2.582c0 .96.39 1.903 1.068 2.582l47.964 47.989c1.357 1.358 3.804 1.358 5.161 0m-23.226 2.582c1.358 1.358 3.804 1.358 5.162 0l4.093-4.095-37.642-37.661-4.093 4.095a3.68 3.68 0 0 0-1.068 2.582c0 .961.39 1.903 1.068 2.582zm-35.06-9.259 11.834 11.841c1.358 1.358 3.804 1.358 5.162 0l6.673-6.677-16.996-17.005-6.673 6.677a3.68 3.68 0 0 0-1.069 2.582c0 .961.39 1.903 1.069 2.582"
    />
  </Svg>
);
export const DumbbellsBg = memo(SVG);
DumbbellsBg.displayName = 'DumbbellsBg';
