import { Show, createSignal } from "solid-js";

import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-bauhaus.utils";

function AvatarBauhaus(props) {
  function properties() {
    return generateColors(props.name, props.colors);
  }

  function getSquareTransform() {
    return (
      "translate(" +
      properties()?.[1]?.translateX +
      " " +
      properties()?.[1]?.translateY +
      ") rotate(" +
      properties()?.[1]?.rotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ")"
    );
  }

  function getCircleTransform() {
    return (
      "translate(" +
      properties()?.[2]?.translateX +
      " " +
      properties()?.[2]?.translateY +
      ")"
    );
  }

  function getLineTransform() {
    return (
      "translate(" +
      properties()?.[3]?.translateX +
      " " +
      properties()?.[3]?.translateY +
      ") rotate(" +
      properties()?.[3]?.rotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ")"
    );
  }

  return (
    <svg
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 " + SIZE + " " + SIZE}
      width={props.size}
      height={props.size}
    >
      <Show when={props.title}>
        <title>{props.name}</title>
      </Show>
      <mask
        id="mask__bauhaus"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <rect
          fill="#FFFFFF"
          width={SIZE}
          height={SIZE}
          rx={props.square ? undefined : SIZE * 2}
        ></rect>
      </mask>
      <g mask="url(#mask__bauhaus)">
        <rect width={SIZE} height={SIZE} fill={properties()?.[0]?.color}></rect>
        <rect
          x={(SIZE - 60) / 2}
          y={(SIZE - 20) / 2}
          width={SIZE}
          height={properties()?.[1]?.isSquare ? SIZE : SIZE / 8}
          fill={properties()?.[1]?.color}
          transform={getSquareTransform()}
        ></rect>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          fill={properties()?.[2]?.color}
          r={SIZE / 5}
          transform={getCircleTransform()}
        ></circle>
        <line
          x1={0}
          y1={SIZE / 2}
          x2={SIZE}
          y2={SIZE / 2}
          strokeWidth={2}
          stroke={properties()?.[3]?.color}
          transform={getLineTransform()}
        ></line>
      </g>
    </svg>
  );
}

export default AvatarBauhaus;
