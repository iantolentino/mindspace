'use client';

import React, { useMemo } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap, 
  BackgroundVariant 
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useMindmapStore } from '@/store/mindmapStore';
import MindmapNode from './MindmapNode';

// Define node types outside the component to prevent unnecessary re-renders
const nodeTypes = {
  mindmap: MindmapNode,
};

export default function FlowCanvas() {
  const { 
    nodes, 
    edges, 
    onNodesChange, 
    onEdgesChange, 
    onConnect 
  } = useMindmapStore();

  // Memoize the nodeTypes object for performance optimization
  const memoizedNodeTypes = useMemo(() => nodeTypes, []);

  return (
    <div className="w-full h-full bg-canvas border-t border-border">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={memoizedNodeTypes}
        fitView
        // Snap to grid for cleaner enterprise-style layouts
        snapToGrid={true}
        snapGrid={[15, 15]}
      >
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1} 
          color="#94a3b8" 
        />
        
        <Controls 
          className="bg-white border border-border shadow-sm rounded-md" 
          showInteractive={false} 
        />
        
        <MiniMap 
          nodeColor="#111827" 
          maskColor="rgba(241, 245, 249, 0.7)" 
          className="border border-border rounded-lg"
        />
      </ReactFlow>
    </div>
  );
}