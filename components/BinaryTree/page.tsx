import { ChildProcess } from "child_process";
import React, { JSXElementConstructor, ReactNode } from "react";

// Declare the types
interface TreeNodeProps {
  id: number;
  value: number;
  children: TreeNodeProps[];
}

const treeData: TreeNodeProps[] = [
  {
    id: 1,
    value: 1,
    children: [
      {
        id: 2,
        value: 2,
        children: [
          {
            id: 4,
            value: 4,
            children: [
              {
                id: 8,
                value: 8,
                children: [],
              },
              {
                id: 9,
                value: 9,
                children: [],
              },
            ],
          },
          {
            id: 5,
            value: 5,
            children: [],
          },
        ],
      },
      {
        id: 3,
        value: 3,
        children: [
          {
            id: 6,
            value: 6,
            children: [],
          },
          {
            id: 7,
            value: 7,
            children: [],
          },
        ],
      },
    ],
  },
];

// A recursive function to load the tree
const TreeNode: React.FC<{ node: TreeNodeProps }> = ({ node }) => {
  return (
    <div className="text-center">
      <span className="p-3 border border-yellow-300 rounded-sm">{node.value}</span>
      {node.children && node.children.length > 0 && (
        <ul className="flex gap-5">
          {node.children.map((child) => (
            <li key={child.id} className="border border-cyan-400 p-5 rounded-sm">
              <TreeNode node={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function BinaryTree() {
  return (
    <div className="border border-rose-300 p-9 rounded-lg">
      {treeData.map((data) => (
        <TreeNode key={data.id} node={data} />
      ))}
    </div>
  );
}
