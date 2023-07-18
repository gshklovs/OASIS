import React from "react";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";

export function Votes(props: any) {
  return (
    <>
      <div className="bg-blue-600/20 ring-1 ring-blue-600 chip-gray-800 rounded-md px-1.5 leading-5 py-1">
        {props.votes}
      </div>
      <div className="flex inline-block flex-col justify-between px-5">
        <button>
          <HandThumbUpIcon
            onClick={props.upClickHandler}
            className={"h-6 w-6" + (props.upClicked ? " text-blue-600" : "")}
            aria-hidden="true"
          />
        </button>
        <button>
          <HandThumbDownIcon
            onClick={props.downClickHandler}
            className={"h-6 w-6" + (props.downClicked ? " text-blue-600" : "")}
            aria-hidden="true"
          />
        </button>
      </div>
    </>
  );
}
