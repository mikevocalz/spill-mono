import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const TeaCupSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 996.25 913.04"
    width={props.width}
    height={props.height}
    fill={props.fill}
    {...props}
  >
    <Path d="M645.51 160.08c-15.18 163.92-68.92 281.6-145.39 394.4h-242.8c-67.69-99.04-128.77-215.54-145.34-394.4H645.5Zm102.99-98.6H9c0 281.8 90.02 443.5 197.2 591.6h345.1c104.52-143.51 197.2-312.22 197.2-591.6Zm55.17 98.6c-2.81 34.56-6.95 67.39-12.42 98.6h76.41c-22.14 63.6-73.95 122.17-113.34 143.66-17.65 51.17-38.8 97.66-62.12 140.6C853.61 486.59 980.41 320.65 995 160.08H803.67Zm-55.17 591.6H9v98.6h739.5v-98.6Z" />
  </Svg>
)
export default TeaCupSVG
