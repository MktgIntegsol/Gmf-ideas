import React from 'react';
import GFMIdeasGenerator from './GFMIdeasGenerator';
import { Feature108 } from "@/components/blocks/feature-108";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <GFMIdeasGenerator />
      <div className="border-t border-border">
        <Feature108 />
      </div>
    </div>
  );
}

export default App;
