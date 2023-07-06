import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const QuoteSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 996.25 913.04"
    width={props.width}
    height={props.height}
    fill={props.fill}
    {...props}
  >
    <Path
      fill="#fff"
      d="m954.79 85.56 40.55 87.61c-91.28 34.41-171.55 154.2-180.49 236.78C917.5 426.11 996 514.95 996 622.13c0 131.13-106.48 205.18-214.24 205.18-124.25 0-239.05-94.99-239.05-258.58 0-211.85 160.38-433.47 412.08-483.17ZM419.08 85.56l40.55 87.61c-91.27 34.41-171.55 154.2-180.49 236.78 102.65 16.16 181.15 105 181.15 212.18 0 131.13-106.48 205.18-214.24 205.18C121.81 827.31 7 732.32 7 568.73 7 356.88 167.38 135.26 419.08 85.56Z"
    />
  </Svg>
)
export default QuoteSVG
