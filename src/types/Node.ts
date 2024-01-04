import { NodeState } from "../features/nodeOneSlice";
import { Arrow } from "./Arrow";
import { Option } from "./Option";
import { NodeSlice } from "./NodeSlice";

export type Node = {
  id: string,
  options: Option[],
  state: NodeState,
  position: { top: number; left: number },
  slice: NodeSlice,
  arrow: Arrow | null,
  childNodes: Node[] | null,
}