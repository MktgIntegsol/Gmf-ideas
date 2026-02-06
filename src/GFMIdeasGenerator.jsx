import React, { useState, useEffect } from 'react';
import { 
  Plus, ArrowRight, Download, RefreshCw, Zap, 
  Copy, Check, MoreHorizontal, LayoutTemplate, 
  FileText, Layers
} from 'lucide-react';

const GFMIdeasGenerator = () => {
  const [step, setStep] = useState(0); 
  const [loadingText, setLoadingText] = useState('');
  
  const [inputs, setInputs] = useState({
    niche: '',           
    audience: '',        
    goal: '',            
    tone: 'Professional', 
    contentType: ''      
  });

  const [ideas, setIdeas] = useState([]);
  const [copied, setCopied] = useState(null);

  const runSimulation = () => {
    if (!inputs.niche || !inputs.audience) return;

    setStep(2); 
    
    const sequences = [
      "Analyzing industry signals...",
      `Syncing with audience data: ${inputs.audience}...`,
      "Identifying high-leverage angles...",
      "Drafting content frameworks...",
      "Finalizing matrix..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(sequences[i]);
      i++;
      if (i >= sequences.length) clearInterval(interval);
    }, 600);

    setTimeout(() => {
      generateIdeas();
      setStep(3);
      clearInterval(interval);
    }, 3500);
  };

  const generateIdeas = () => {
    const { niche, audience, goal } = inputs;
    const generatedIdeas = [
      { id: 1, type: "Contrarian", hook: `"Stop following 'best practices' in ${niche}. Here is why."`, angle: "Challenge Status Quo", format: "Think Piece", engagement: "High" },
      { id: 2, type: "Case Study", hook: `"How we helped ${audience} achieve ${goal} in 90 days."`, angle: "Social Proof", format: "Narrative", engagement: "Very High" },
      { id: 3, type: "Mistakes", hook: `"7 red flags that your ${niche} strategy is failing."`, angle: "Fear of Loss", format: "Listicle", engagement: "High" },
      { id: 4, type: "Insight", hook: `"The quiet truth about successful ${niche} leaders."`, angle: "Authority", format: "Personal Story", engagement: "Medium-High" },
      { id: 5, type: "Framework", hook: `"My 3-step system for ${goal} without burnout."`, angle: "Utility", format: "Actionable Guide", engagement: "Very High" },
      { id: 6, type: "Prediction", hook: `"Why 2026 will change ${niche} forever."`, angle: "Visionary", format: "Analysis", engagement: "High" },
      { id: 7, type: "Tool Stack", hook: `"The tech stack I use to dominate ${niche}."`, angle: "Productivity", format: "Curated List", engagement: "Very High" },
      { id: 8, type: "Comparison", hook: `"${niche}: Then vs Now. The evolution."`, angle: "Perspective", format: "Visual", engagement: "Medium" },
      { id: 9, type: "Myth", hook: `"The biggest lie you've been sold about ${goal}."`, angle: "Truth", format: "Text", engagement: "High" },
      { id: 10, type: "Tutorial", hook: `"How to achieve ${goal} as a beginner."`, angle: "Accessibility", format: "How-To", engagement: "Very High" },
      { id: 11, type: "Reflection", hook: `"I almost quit ${niche}. Here's what kept me going."`, angle: "Vulnerability", format: "Story", engagement: "Very High" },
      { id: 12, type: "Tactic", hook: `"One 5-minute hack to improve ${goal}."`, angle: "Efficiency", format: "Short Form", engagement: "High" }
    ];
    setIdeas(generatedIdeas);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  // --- Components ---

  const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-zinc-100 text-zinc-950 flex items-center justify-center font-bold text-sm">G</div>
          <span className="font-medium text-sm tracking-tight text-white">GFM Intelligence</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
           {step > 0 && (
             <span className="flex items-center gap-2 border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/50">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> 
               Operational
             </span>
           )}
        </div>
      </div>
    </header>
  );

  const Intro = () => (
    <div className="flex flex-col items-center text-center justify-center min-h-[80vh] px-6 animate-in fade-in zoom-in duration-500">
       <div className="mb-8 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-400">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          Params v2.0 Available
       </div>
       <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
         Content strategy, <br/>
         <span className="text-zinc-500">engineered.</span>
       </h1>
       <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
          Generate high-leverage content angles tailored to your niche. 
          Stop guessing, start publishing.
       </p>
       <button 
         onClick={() => setStep(1)} 
         className="h-12 px-8 rounded-lg bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2"
       >
         Start Generator <ArrowRight className="w-4 h-4"/>
       </button>
    </div>
  );

  const InputForm = () => (
    <div className="w-full max-w-3xl mx-auto pt-20 px-6 animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 shadow-2xl">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white mb-2">Configure Parameters</h2>
          <p className="text-zinc-500">Define your target vector for content generation.</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-3">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Niche / Industry</label>
                <input 
                   autoFocus
                   type="text" 
                   placeholder="e.g. B2B SaaS, Fintech..." 
                   className="flex h-12 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                   value={inputs.niche}
                   onChange={(e) => setInputs({...inputs, niche: e.target.value})}
                />
             </div>
             <div className="space-y-3">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Target Audience</label>
                <input 
                   type="text" 
                   placeholder="e.g. CTOs, Freelancers..." 
                   className="flex h-12 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                   value={inputs.audience}
                   onChange={(e) => setInputs({...inputs, audience: e.target.value})}
                />
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-3">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Primary Goal</label>
                <div className="relative">
                   <select 
                     className="flex h-12 w-full appearance-none rounded-lg border border-zinc-700 bg-zinc-950 px-4 text-sm text-white focus:border-white focus:outline-none transition-colors cursor-pointer"
                     value={inputs.goal}
                     onChange={(e) => setInputs({...inputs, goal: e.target.value})}
                   >
                     <option value="" className="text-zinc-500">Select goal...</option>
                     <option value="Lead Generation">Lead Generation</option>
                     <option value="Thought Leadership">Thought Leadership</option>
                     <option value="Brand Awareness">Brand Awareness</option>
                   </select>
                   <MoreHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none"/>
                </div>
             </div>
             <div className="space-y-3">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Tone of Voice</label>
                <div className="relative">
                   <select 
                     className="flex h-12 w-full appearance-none rounded-lg border border-zinc-700 bg-zinc-950 px-4 text-sm text-white focus:border-white focus:outline-none transition-colors cursor-pointer"
                     value={inputs.tone}
                     onChange={(e) => setInputs({...inputs, tone: e.target.value})}
                   >
                     <option value="Professional">Professional</option>
                     <option value="Contrarian">Contrarian</option>
                     <option value="Empathetic">Empathetic</option>
                   </select>
                   <MoreHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none"/>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
           <button 
             onClick={runSimulation}
             disabled={!inputs.niche || !inputs.audience || !inputs.goal}
             className="w-full md:w-auto h-12 px-8 rounded-lg bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5"
           >
             <Zap className="w-4 h-4" /> 
             Generate Matrix
           </button>
        </div>
      </div>
    </div>
  );

  const Loading = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in duration-700">
       <div className="relative flex h-16 w-16">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
          <span className="relative inline-flex rounded-full h-16 w-16 border-2 border-white/20 items-center justify-center">
             <div className="w-4 h-4 bg-white rounded-full"></div>
          </span>
       </div>
       <div className="space-y-3 text-center">
          <h3 className="text-xl font-medium text-white tracking-tight">Processing Intelligence</h3>
          <p className="text-sm text-zinc-500 font-mono bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 animate-pulse">
            {loadingText}
          </p>
       </div>
    </div>
  );

  const Results = () => (
    <div className="w-full max-w-7xl mx-auto px-6 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500 mb-20">
       <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div className="space-y-1">
             <h2 className="text-3xl font-semibold text-white tracking-tight">Content Matrix</h2>
             <div className="flex gap-2 text-xs font-mono text-zinc-500 pt-2">
                <span className="border border-zinc-800 bg-zinc-900 px-2 py-1 rounded uppercase">{inputs.niche}</span>
                <span className="border border-zinc-800 bg-zinc-900 px-2 py-1 rounded uppercase">{inputs.audience}</span>
             </div>
          </div>
          <div className="flex gap-3">
             <button onClick={() => setStep(1)} className="h-10 px-4 rounded-md border border-zinc-800 bg-transparent text-sm font-medium text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors flex items-center gap-2">
               <RefreshCw className="w-4 h-4"/> Reset
             </button>
             <button onClick={() => window.print()} className="h-10 px-4 rounded-md bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
               <Download className="w-4 h-4"/> Export PDF
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea) => (
             <div key={idea.id} className="group relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50">
                <div className="flex justify-between items-start mb-5">
                   <div className="flex items-center gap-3">
                      <span className="flex h-6 min-w-[1.5rem] items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-[10px] font-mono text-zinc-500">
                        {String(idea.id).padStart(2, '0')}
                      </span>
                      <span className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 text-xs font-medium text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                         {idea.type}
                      </span>
                   </div>
                   <button 
                     onClick={() => handleCopy(idea.hook, idea.id)}
                     className="text-zinc-500 hover:text-white transition-colors"
                   >
                     {copied === idea.id ? <Check className="w-4 h-4 text-emerald-500"/> : <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"/>}
                   </button>
                </div>
                
                <p className="text-base font-medium text-zinc-300 leading-relaxed mb-8 flex-grow group-hover:text-white transition-colors">
                   {idea.hook}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto pt-5 border-t border-zinc-800/50 text-xs">
                   <div>
                      <span className="block text-zinc-600 mb-1 font-medium uppercase tracking-wider">Angle</span>
                      <span className="text-zinc-300 font-medium">{idea.angle}</span>
                   </div>
                   <div className="text-right">
                      <span className="block text-zinc-600 mb-1 font-medium uppercase tracking-wider">Format</span>
                      <span className="text-zinc-300 font-medium">{idea.format}</span>
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans antialiased selection:bg-white/20">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        {step === 0 && <Intro />}
        {step === 1 && <InputForm />}
        {step === 2 && <Loading />}
        {step === 3 && <Results />}
      </main>
    </div>
  );
};

export default GFMIdeasGenerator;
