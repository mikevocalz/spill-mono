import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const CommentBoxSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 996.25 913.04"
    width={props.width}
    height={props.height}
    fill={props.fill}
    {...props}
  >
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M996 44.48v615.75c0 24.57-19.91 44.48-44.48 44.48H470.8c-9.3 0-18.37 2.91-25.92 8.33L166 913.04V749.19c0-24.57-19.91-44.48-44.48-44.48H44.48C19.91 704.71 0 684.8 0 660.23V44.48C0 19.91 19.91 0 44.48 0h907.04C976.09 0 996 19.91 996 44.48Zm-83 533.54v-450.5c0-24.57-19.91-44.48-44.48-44.48H127.48c-24.57 0-44.48 19.91-44.48 44.48v450.5c0 24.57 19.91 44.48 44.48 44.48h77.04c24.57 0 44.48 19.91 44.48 44.48v84.38l169.23-120.6a44.493 44.493 0 0 1 25.81-8.26h424.48c24.57 0 44.48-19.91 44.48-44.48Z"
    />
  </Svg>
)
export default CommentBoxSVG
