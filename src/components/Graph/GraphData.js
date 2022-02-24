import ReactGraph from "./ReactGraph"

const obj = {
    id: 0,
    name: "obj1",
    levels: [
      {
        levelId: 1,
        levelName: "L1",
        levelElements: [
          { elementId: 1.1, elementName: "E1.1" },
          { elementId: 1.2, elementName: "E1.2" },
          { elementId: 1.3, elementName: "E1.3" },
          { elementId: 1.4, elementName: "E1.4" },
          { elementId: 1.5, elementName: "E1.5" },
        ],
      },
      {
        levelId: 2,
        levelName: "L2",
        levelElements: [
          { elementId: 2.1, elementName: "E2.1" },
          { elementId: 2.2, elementName: "E2.2" },
          { elementId: 2.3, elementName: "E2.3" },
          { elementId: 2.4, elementName: "E2.4" },
          { elementId: 2.5, elementName: "E2.5" },
          { elementId: 2.6, elementName: "E2.6" },
          { elementId: 2.7, elementName: "E2.7" },
          { elementId: 2.8, elementName: "E2.8" },
          { elementId: 2.9, elementName: "E2.9" },
        ],
      },
      {
        levelId: 3,
        levelName: "L3",
        levelElements: [
          { elementId: 3.1, elementName: "E3.1" },
          { elementId: 3.2, elementName: "E3.2" },
          { elementId: 3.3, elementName: "E3.3" },
          { elementId: 3.4, elementName: "E3.4" },
        ],
      },
    ],
  };

const GraphData = props => {
    return <ReactGraph obj={obj}/>
}

export default GraphData;