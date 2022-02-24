import React from "react";
import Graph from "react-graph-vis";

const ReactGraph = ({ obj } = {}) => {
  const parent = obj.name;
  const mainId = obj.id;
  const title = "node 5 tootip text";

  const childsName = obj.levels.map((res, index) => {
    let ID = index + 2;
    return { id: ID, label: res.levelName, title: `node ${ID} tootip text` };
  });

  const mappedData = (arr) =>
    arr.map((res) => {
      return { id: res.elementId, label: res.elementName, title };
    });

  const mappedDataId = (index, arrId) =>
    arrId.map((res) => {
      return { from: index, to: res.id };
    });

  const firstChild = obj.levels[0].levelElements;
  const secondChild = obj.levels[1].levelElements;
  const thirdChild = obj.levels[2].levelElements;
  const levelOne = mappedData(firstChild);
  const levelTwo = mappedData(secondChild);
  const levelThree = mappedData(thirdChild);
  const childsId = mappedDataId(mainId, childsName);
  const levelOneId = mappedDataId(childsName[0].id, levelOne);
  const levelTwoId = mappedDataId(childsName[1].id, levelTwo);
  const levelThreeId = mappedDataId(childsName[2].id, levelThree);

  const graph = {
    nodes: [
      { id: mainId, label: parent, title: "node 1 tootip text" },
      ...childsName,
      ...levelOne,
      ...levelTwo,
      ...levelThree,
    ],
    edges: [...childsId, ...levelOneId, ...levelTwoId, ...levelThreeId],
  };

  const options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: "#000000",
    },
    height: "400px",
  };

  return <Graph graph={graph} options={options} />;
};

export default ReactGraph;
