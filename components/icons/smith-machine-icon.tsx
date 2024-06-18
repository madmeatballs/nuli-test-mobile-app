import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    viewBox="0 0 44 44"
    {...props}
  >
    <Rect
      width={44}
      height={44}
      fill={props.color ?? '#fff'}
      fillOpacity={0.75}
      rx={11}
    />
    <Path
      fill={props.color ?? '#262C45'}
      d="M27.507 10.408q.349-.004.692.063c.624.129 1.018.51 1.179 1.126q.075.297.073.602v7.72c0 .147-.066.228-.217.228h-.027a2 2 0 0 1-.156.007c-.248 0-.278-.078-.278-.413v-7.452a2.3 2.3 0 0 0-.049-.532c-.076-.323-.272-.528-.595-.607a2.2 2.2 0 0 0-.506-.062q-5.625 0-11.25.002a2.1 2.1 0 0 0-.532.045c-.287.075-.464.286-.552.565q-.074.272-.062.554v7.476c0 .334-.043.43-.281.43q-.096 0-.191-.013c-.14-.014-.204-.081-.205-.218v-7.646q0-.306.055-.605a1.475 1.475 0 0 1 1.282-1.22q.347-.05.698-.05h10.922m0-.585H16.58a5.5 5.5 0 0 0-.78.052 2.07 2.07 0 0 0-1.776 1.696 4 4 0 0 0-.064.713v7.649c.002.44.288.75.729.798q.125.014.252.015c.415 0 .626-.2.73-.368.125-.206.137-.44.137-.646v-7.477a1.4 1.4 0 0 1 .036-.38c.049-.146.108-.164.14-.173q.19-.033.382-.025h11.251q.186 0 .367.046c.098.023.136.052.164.171q.038.197.031.398v7.452c0 .225.01.443.134.642q.221.356.73.357c.052 0 .111 0 .19-.008a.79.79 0 0 0 .57-.228.8.8 0 0 0 .225-.591V12.2a3 3 0 0 0-.092-.75c-.216-.83-.793-1.38-1.626-1.553a4 4 0 0 0-.812-.075z"
    />
    <Path
      fill={props.color ?? '#262C45'}
      d="M13.188 19.28a.3.3 0 0 1 .176.067.2.2 0 0 0 .13.054.25.25 0 0 0 .13-.045.4.4 0 0 1 .217-.07c.15 0 .254.12.259.333.008.364.028.732-.027 1.093q-.022.195-.015.391v2.045c0 .422.078.84.05 1.263-.006.073 0 .147-.008.219-.022.178-.122.283-.257.283a.36.36 0 0 1-.178-.053.35.35 0 0 0-.168-.057.25.25 0 0 0-.157.065.24.24 0 0 1-.147.052.27.27 0 0 1-.187-.084.17.17 0 0 0-.109-.062.2.2 0 0 0-.108.049.37.37 0 0 1-.223.088c-.14 0-.244-.12-.255-.327-.012-.283-.004-.567-.005-.852 0-.138.004-.276-.003-.413-.009-.193-.042-.225-.227-.244-.295-.034-.3-.04-.303-.342-.007-.44-.007-.44-.454-.44H9.954q-.098.001-.195-.005-.176-.012-.176-.19c.001-.117.066-.182.18-.184h.904v-.006h.51q.171 0 .342-.003c.202-.004.24-.049.251-.244.006-.106.005-.211.005-.316 0-.139.07-.2.209-.215.32-.035.321-.04.322-.374v-.974q-.001-.097.005-.196c.02-.187.127-.298.261-.298.074.003.145.03.202.076a.24.24 0 0 0 .126.062.16.16 0 0 0 .11-.065.25.25 0 0 1 .18-.08zm.002-.585a.8.8 0 0 0-.311.062.9.9 0 0 0-.306-.057c-.445 0-.792.338-.844.822q-.01.111-.009.224v.842a.76.76 0 0 0-.53.732H10.08v.005h-.323a.773.773 0 0 0-.039 1.544c.086.006.168.007.235.007h1.235c.01.17.043.351.187.514.09.102.21.176.341.213v.387q-.002.301.007.619c.022.513.376.886.84.886q.16 0 .31-.057a.83.83 0 0 0 .643-.004q.155.06.323.063c.436 0 .78-.328.839-.798q.01-.098.009-.195v-.053a5.3 5.3 0 0 0-.021-.816c-.013-.171-.026-.332-.025-.488v-2.12q-.004-.114.007-.226c.056-.363.046-.707.038-1.039q-.001-.078-.004-.155c-.013-.596-.434-.907-.845-.907a.9.9 0 0 0-.328.06.8.8 0 0 0-.324-.065zM30.793 19.28c.071.003.14.028.195.073a.2.2 0 0 0 .115.046.24.24 0 0 0 .123-.042.44.44 0 0 1 .212-.067c.147 0 .244.115.249.322.012.397.003.795.007 1.192 0 .28.016.293.3.324.19.02.219.049.23.24.005.09 0 .179.004.268.01.226.045.266.278.268l.687.003h.798q.109 0 .218.003c.122.004.203.052.204.188s-.078.19-.2.19h-.901v.002h-.778c-.271.004-.301.037-.307.315v.219c-.012.195-.04.222-.228.244-.293.032-.301.043-.303.345v1.021q.003.11-.01.219c-.027.16-.137.26-.262.26a.28.28 0 0 1-.17-.063.26.26 0 0 0-.149-.07.23.23 0 0 0-.146.078.22.22 0 0 1-.15.059.27.27 0 0 1-.184-.08c-.059-.056-.108-.087-.16-.087s-.098.027-.16.088a.22.22 0 0 1-.159.071c-.119 0-.229-.11-.24-.28a4.4 4.4 0 0 1 .01-.851c.003-.024.01-.049.011-.072.023-1.078.049-2.156-.013-3.233q-.03-.45-.01-.9c.012-.183.123-.292.265-.292a.36.36 0 0 1 .184.056.3.3 0 0 0 .15.056.2.2 0 0 0 .128-.054.27.27 0 0 1 .166-.06zm.005-.587a.8.8 0 0 0-.312.06.9.9 0 0 0-.317-.058c-.463 0-.82.355-.849.845a9 9 0 0 0 .01.966c.056 1.03.034 2.091.013 3.116v.034q-.002.021-.007.051-.054.48-.014.963c.033.47.39.825.825.825q.167 0 .32-.067a.808.808 0 0 0 .652.013.8.8 0 0 0 .305.058c.42 0 .765-.308.839-.748q.021-.142.018-.286v-.857c.33-.098.503-.342.53-.732h1.409c.456-.003.785-.33.78-.781 0-.44-.32-.757-.771-.77q-.114-.002-.236-.004H32.81c-.007-.12-.027-.353-.21-.543a.7.7 0 0 0-.32-.19v-.222c0-.25 0-.51-.006-.771-.019-.586-.433-.89-.834-.89a1 1 0 0 0-.316.057.9.9 0 0 0-.33-.066z"
    />
    <Path
      fill={props.color ?? '#262C45'}
      d="M14.83 24.08q.107.003.213.02c.115.02.174.078.179.192q.004.135.004.268v7.907c0 .44 0 .44.445.449h.01q.053-.002.11-.004c.076 0 .146.014.18.1a.7.7 0 0 1-.005.5c-.026.067-.101.076-.167.077h-1.776c-.14 0-.204-.079-.205-.215v-.098c-.004-.328.025-.357.357-.362h.146c.146 0 .227-.07.227-.221v-8.177c0-.323.056-.436.282-.436m0-.586c-.428 0-.634.235-.723.374-.127.206-.147.443-.147.647v7.824a.8.8 0 0 0-.51.225c-.227.23-.223.525-.22.72v.097c.003.46.336.794.79.794h1.778c.497 0 .67-.344.712-.45.115-.294.118-.62.008-.917a.74.74 0 0 0-.708-.48V24.56c0-.114 0-.207-.006-.293a.764.764 0 0 0-.67-.744 2 2 0 0 0-.306-.03zM29.123 24.096c.296 0 .326.035.326.346v8.201c.01.226.045.26.278.27h.14600000000000002c.27.006.303.04.307.314.004.33-.025.362-.355.363H28.34c-.326 0-.355-.033-.35-.367q-.001-.06.005-.121a.18.18 0 0 1 .113-.173.2.2 0 0 1 .072-.011q.182-.008.364-.008c.152 0 .223-.078.222-.227l.002-.268v-8.002c.006-.282.038-.313.331-.314h.021zm-.003-.583h-.024c-.169 0-.451 0-.674.213-.23.22-.236.505-.24.676v7.9319999999999995h-.028a.76.76 0 0 0-.744.732 3 3 0 0 0-.005.15c-.004.197-.009.497.219.73.227.23.52.231.714.232h1.4889999999999999c.195 0 .49 0 .718-.233s.223-.528.22-.724c0-.164-.005-.44-.218-.658a.8.8 0 0 0-.513-.227v-7.892999999999999c0-.185 0-.465-.21-.69-.227-.244-.537-.244-.702-.244zM23.917 21.906h3.876q.135-.002.268.008a.16.16 0 0 1 .156.107.2.2 0 0 1 .009.066c.004.116-.05.187-.167.196a3 3 0 0 1-.219.007H16.157q-.11.002-.219-.007a.16.16 0 0 1-.164-.174c-.004-.115.046-.188.165-.195q.135-.01.268-.008h7.712zm-7.711-.585q-.146-.002-.31.008a.75.75 0 0 0-.71.8.747.747 0 0 0 .704.739c.1.008.195.01.265.01H27.84c.077 0 .169 0 .266-.01.43-.035.718-.364.704-.8a.745.745 0 0 0-.708-.738 4 4 0 0 0-.31-.01z"
    />
    <Path
      fill={props.color ?? '#262C45'}
      d="M29.087 20.347q.113 0 .227.008c.301.022.42.144.425.448.007.559.003 1.118.003 1.676 0 .316.004.634 0 .948-.007.33-.098.42-.422.425h-.244q-.12 0-.24-.003c-.272-.007-.347-.076-.351-.35-.008-.47 0-.94 0-1.41 0-.446-.003-.891 0-1.336 0-.287.087-.378.372-.4q.117-.009.235-.009zm.005-.588q-.142 0-.28.01c-.592.046-.908.384-.913.976-.003.316 0 .635 0 .945v.914c0 .296 0 .6.003.901 0 .122.007.445.25.683.21.206.469.238.672.244q.12.002.256.004h.255c.13 0 .48-.009.732-.263.224-.224.258-.511.262-.736q.006-.358.003-.706v-.71c0-.402 0-.817-.003-1.227-.008-.607-.36-.981-.969-1.025a4 4 0 0 0-.268-.01M14.93 20.347q.11 0 .22.009c.29.025.407.146.412.435.008.446 0 .892 0 1.338v1.192a2 2 0 0 1-.011.244c-.03.188-.117.274-.307.283a6 6 0 0 1-.632 0c-.222-.011-.298-.093-.308-.322-.01-.21-.005-.422-.005-.633v-2.067c0-.369.094-.462.457-.474q.084-.002.17-.003zm-.005-.584q-.08 0-.188.003c-.237.008-.537.05-.765.282-.23.232-.257.537-.258.775v2.2300000000000004q-.002.243.006.498c.022.534.338.856.864.882a7 7 0 0 0 .69 0c.464-.022.784-.312.856-.778q.022-.155.02-.312v-1.8q.001-.378-.004-.762c-.01-.589-.355-.957-.947-1.009a3 3 0 0 0-.271-.01z"
    />
  </Svg>
);
export const SmithMachineIcon = memo(SVG);
SmithMachineIcon.displayName = 'SmithMachineIcon';