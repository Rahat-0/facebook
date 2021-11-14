import React from "react";

function RightAside() {
  const right = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1,
  ];
  return (
    <div
      className="fixed w-3/12 px-2 text-white right-0 overflow-y-scroll"
      style={{ height: "90vh" }}
    >
      {right.map(() => (
        <div className="text-left m-3 p-2 bg-gray-400 rounded-lg">
          <p>this is test</p>
        </div>
      ))}
    </div>
  );
}

export default RightAside;
