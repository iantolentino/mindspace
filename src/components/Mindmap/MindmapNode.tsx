'use client';

import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { useMindmapStore } from '@/store/mindmapStore';

const MindmapNode = ({ id, data }: NodeProps) => {
  const updateNodeLabel = useMindmapStore((state) => state.updateNodeLabel);

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-primary min-w-[150px]">
      <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-primary" />
      
      <div className="flex flex-col">
        <input
          className="nodrag bg-transparent border-none outline-none text-sm font-medium text-primary w-full"
          defaultValue={data.label}
          onChange={(evt) => updateNodeLabel(id, evt.target.value)}
          placeholder="Type something..."
        />
      </div>

      <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-primary" />
    </div>
  );
};

export default memo(MindmapNode);