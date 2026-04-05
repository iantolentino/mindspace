import { useMindmapStore } from '@/store/mindmapStore';

describe('Mindmap Store', () => {
  beforeEach(() => {
    // Reset state before each test
    useMindmapStore.setState({
      nodes: [{ id: '1', type: 'input', data: { label: 'Central Idea' }, position: { x: 0, y: 0 } }],
      edges: [],
    });
  });

  it('should add a new node', () => {
    const store = useMindmapStore.getState();
    expect(store.nodes.length).toBe(1);
    
    store.addNode();
    
    const updatedStore = useMindmapStore.getState();
    expect(updatedStore.nodes.length).toBe(2);
    expect(updatedStore.nodes[1].data.label).toBe('New Node');
  });

  it('should import JSON data correctly', () => {
    const store = useMindmapStore.getState();
    const mockData = {
      nodes: [{ id: '99', data: { label: 'Imported' }, position: { x: 10, y: 10 } }],
      edges: []
    };
    
    store.importFromJson(JSON.stringify(mockData));
    
    const updatedStore = useMindmapStore.getState();
    expect(updatedStore.nodes[0].id).toBe('99');
    expect(updatedStore.nodes[0].data.label).toBe('Imported');
  });
});