import cn from "classnames";
import { useAppDispatch } from "../../app/hooks";
import { Node } from "../../types/Node";
import { Option } from "../../types/Option";
import "./NodeComponent.scss";
import React, { Suspense, useEffect, useRef } from "react";

type Props = {
  parentNodeValue?: string;
  node: Node;
};

export const NodeComponent: React.FC<Props> = ({ parentNodeValue, node }) => {
  const dispatch = useAppDispatch();
  const { isSelectOpen, currentOption } = node.state;

  const handleSelectOption = (option: Option) => {
    dispatch(action.setCurrentOption(option));
    dispatch(action.setIsSelectOpen(false));
  };

  const displayedValue = parentNodeValue
    ? `${parentNodeValue}-${currentOption?.value}`
    : currentOption?.value;

  /* eslint-disable */
  const action = require("../../features/" + node.slice);
  const Arrow = React.lazy(() => import(`../Arrows/${node.arrow}/${node.arrow}`));  

  return (
    <div
      className="Node"
      style={{
        left: `${node.position.left}px`,
        top: `${node.position.top}px`,
      }}      
    >
      <div className="Node__content"></div>
      <div className="Node__select">
        <button
          id="triger"
          type="button"
          className={cn("Node__select-triger", {
            "triger-active": isSelectOpen,
          })}
          onClick={() => dispatch(action.setIsSelectOpen(!isSelectOpen))}          
        >
          <span>
            {currentOption ? `Варіант ${displayedValue}` : "Виберіть значення"}
          </span>

          <div
            className={cn("Node__select-icon", { "icon-active": isSelectOpen })}
          />
        </button>

        {node.state.isSelectOpen && (
          <ul className="Node__options">
            {node.options.map((option) => (
              <li
                className="Node__options-item"
                key={option.value}
                onClick={() => handleSelectOption(option)}
              >
                <input
                  type="checkbox"
                  id={option.value}
                  checked={option.value === currentOption?.value}
                  className="Node__options-input"
                  onChange={() => handleSelectOption(option)}
                />
                <label htmlFor={option.value} className="Node__options-input">
                  {`Варіант ${option.value}`}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {node.arrow && (
        <Suspense fallback={null}>
          <Arrow />
        </Suspense>
      )}

      {node.childNodes && (
        <ul>
          {node.childNodes.map((childnode) => (
            <li key={childnode.id}>
              <NodeComponent
                parentNodeValue={displayedValue}
                node={childnode}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
