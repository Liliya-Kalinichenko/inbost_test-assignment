import "./App.scss";
import { useAppSelector } from "./app/hooks";
import { NodeComponent } from "./components/NodeComponent";
import { selectOptions } from "./data/options";
import { Arrow } from "./types/Arrow";
import { Node } from "./types/Node";
import { NodeSlice } from "./types/NodeSlice";

function App() {
  const nodesExample: Node[] = [
    {
      id: "1",
      options: selectOptions,
      state: useAppSelector((state) => state.nodeOne),
      position: { top: 127, left: 67 },
      slice: NodeSlice.One,
      arrow: Arrow.One,
      childNodes: [
        {
          id: "2",
          options: selectOptions,
          state: useAppSelector((state) => state.nodeTwo),
          position: { top: 217, left: 194 },
          slice: NodeSlice.Two,
          arrow: Arrow.Two,
          childNodes: [
            {
              id: "3",
              options: selectOptions,
              state: useAppSelector((state) => state.nodeThree),
              position: { top: 144, left: 319 },
              slice: NodeSlice.Three,
              arrow: Arrow.Three,
              childNodes: [
                {
                  id: "4",
                  options: selectOptions,
                  state: useAppSelector((state) => state.nodeFour),
                  position: { top: 182, left: 270 },
                  slice: NodeSlice.Four,
                  arrow: null,
                  childNodes: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="App">
      <ul className="App__list">
        {nodesExample.map((node) => (
          <li key={node.id} className="App__list-item">
            <NodeComponent node={node} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
