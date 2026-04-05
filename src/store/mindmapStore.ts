import { create } from 'zustand';
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';

type MindmapState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: () => void;
  updateNodeLabel: (id: string, label: string) => void;
  exportToJson: () => void;
  importFromJson: (jsonData: string) => void;
};

const initialNodes: Node[] = [
  { 
    id: 'root-1', 
    type: 'mindmap', 
    data: { label: 'Central Idea' }, 
    position: { x: 250, y: 250 } 
  },
];

export const useMindmapStore = create<MindmapState>((set, get) => ({
  nodes: initialNodes,
  edges: [],

  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  updateNodeLabel: (id: string, label: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          return { ...node, data: { ...node.data, label } };
        }
        return node;
      }),
    });
  },

  addNode: () => {
    const newNode: Node = {
      id: crypto.randomUUID(),
      type: 'mindmap',
      data: { label: 'New Topic' },
      position: { 
        x: Math.random() * 400 + 100, 
        y: Math.random() * 400 + 100 
      },
    };
    set({ nodes: [...get().nodes, newNode] });
  },

  exportToJson: () => {
    const data = { 
      nodes: get().nodes, 
      edges: get().edges,
      exportedAt: new Date().toISOString() 
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `mindmap-${new Date().getTime()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  },

  importFromJson: (jsonData: string) => {
    try {
      const data = JSON.parse(jsonData);
      if (data.nodes && data.edges) {
        set({ nodes: data.nodes, edges: data.edges });
      }
    } catch (error) {
      console.error('Failed to parse mindmap data:', error);
      alert('Invalid JSON file format.');
    }
  },
}));