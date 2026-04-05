'use client';

import React, { useRef } from 'react';
import { useMindmapStore } from '@/store/mindmapStore';
import { Download, Upload, Plus, BrainCircuit } from 'lucide-react';

export default function Header() {
  const { addNode, exportToJson, importFromJson } = useMindmapStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        importFromJson(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-surface border-b border-border shadow-sm absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center space-x-2 text-primary">
        <BrainCircuit size={24} />
        <h1 className="font-semibold text-lg tracking-tight">MindSpace</h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <button 
          onClick={addNode}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-primary bg-canvas border border-border rounded-md hover:bg-gray-100 transition-colors"
        >
          <Plus size={16} />
          <span>Add Node</span>
        </button>

        <div className="h-6 w-px bg-border mx-2"></div>

        <button 
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
        >
          <Upload size={16} />
          <span>Import</span>
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept=".json" 
          className="hidden" 
        />

        <button 
          onClick={exportToJson}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-gray-800 transition-colors shadow-sm"
        >
          <Download size={16} />
          <span>Export JSON</span>
        </button>
      </div>
    </header>
  );
}