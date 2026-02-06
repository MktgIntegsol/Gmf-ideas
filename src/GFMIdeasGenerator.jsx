import React, { useState, useEffect } from 'react';
import { 
  Plus, ArrowRight, Download, RefreshCw, Sparkles, 
  Copy, Check, Share2, Box, Layers, Zap, MoreHorizontal,
  LayoutTemplate, LineChart, FileText
} from 'lucide-react';

const GFMIdeasGenerator = () => {
  const [step, setStep] = useState(0); 
  const [loadingText, setLoadingText] = useState('');
  
  const [inputs, setInputs] = useState({
    niche: '',           
    audience: '',        
    goal: '',            
    tone: 'profesional', 
    contentType: ''      
  });

  const [ideas, setIdeas] = useState([]);
  const [copied, setCopied] = useState(null);

  // Forza modo oscuro por defecto para el estilo "Lovable Dark"
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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

  // --- COMPONENTES ---

  const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">G</div>
          <span className="font-semibold text-sm tracking-tight">GFM Intelligence</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
           {step > 0 && <span className="flex items-center gap-2 text-xs border rounded-full px-2 py-0.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Operational</span>}
        </div>
      </div>
    </header>
  );

  const Intro = () => (
    <div className="flex flex-col items-center text-center justify-center py-24 md:py-32 animate-in space-y-8 max-w-3xl mx-auto px-6">
       <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          v2.0 Released
       </div>
       <h1 className="text-4xl md:text-6xl font-bold tracking-tight lg:text-7xl">
         Content strategy, <br/>
         <span className="text-muted-foreground">engineereed.</span>
       </h1>
       <p className="text-xl text-muted-foreground max-w-[600px]">
          Generate high-leverage content angles tailored to your niche. 
          Stop guessing, start publishing.
       </p>
       <div className="flex gap-4 pt-4">
          <button onClick={() => setStep(1)} className="btn-primary h-12 px-8 text-base">
            Start Generator <ArrowRight className="ml-2 w-4 h-4"/>
          </button>
       </div>
    </div>
  );

  const InputForm = () => (
    <div className="w-full max-w-2xl mx-auto animate-in pt-12 px-6">
      <div className="card-base p-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Configure Parameters</h2>
          <p className="text-sm text-muted-foreground">Define your target vector for content generation.</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Niche / Industry</label>
                <input 
                   autoFocus
                   type="text" 
                   placeholder="e.g. B2B SaaS, Fintech..." 
                   className="input-field"
                   value={inputs.niche}
                   onChange={(e) => setInputs({...inputs, niche: e.target.value})}
                />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Target Audience</label>
                <input 
                   type="text" 
                   placeholder="e.g. CTOs, Freelancers..." 
                   className="input-field"
                   value={inputs.audience}
                   onChange={(e) => setInputs({...inputs, audience: e.target.value})}
                />
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Primary Goal</label>
                <div className="relative">
                   <select 
                     className="input-field appearance-none"
                     value={inputs.goal}
                     onChange={(e) => setInputs({...inputs, goal: e.target.value})}
                   >
                     <option value="">Select goal...</option>
                     <option value="Lead Generation">Lead Generation</option>
                     <option value="Thought Leadership">Thought Leadership</option>
                     <option value="Brand Awareness">Brand Awareness</option>
                   </select>
                   <div className="absolute right-3 top-2.5 pointer-events-none opacity-50"><MoreHorizontal className="w-4 h-4"/></div>
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Tone of Voice</label>
                <div className="relative">
                   <select 
                     className="input-field appearance-none"
                     value={inputs.tone}
                     onChange={(e) => setInputs({...inputs, tone: e.target.value})}
                   >
                     <option value="Professional">Professional</option>
                     <option value="Contrarian">Contrarian</option>
                     <option value="Empathetic">Empathetic</option>
                   </select>
                   <div className="absolute right-3 top-2.5 pointer-events-none opacity-50"><MoreHorizontal className="w-4 h-4"/></div>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
           <button 
             onClick={runSimulation}
             disabled={!inputs.niche || !inputs.audience || !inputs.goal}
             className="btn-primary w-full md:w-auto"
           >
             <Zap className="mr-2 w-4 h-4" /> Generate Matrix
           </button>
        </div>
      </div>
    </div>
  );

  const Loading = () => (
    <div className="flex flex-col items-center justify-center py-32 space-y-6 animate-in">
       <div className="relative flex h-8 w-8">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
          <span className="relative inline-flex rounded-full h-8 w-8 bg-primary"></span>
       </div>
       <div className="space-y-2 text-center">
          <h3 className="text-lg font-medium">Processing</h3>
          <p className="text-sm text-muted-foreground font-mono">{loadingText}</p>
       </div>
    </div>
  );

  const Results = () => (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 animate-in h-[calc(100vh-3.5rem)] flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
             <h2 className="text-2xl font-semibold tracking-tight">Content Matrix</h2>
             <div className="flex gap-2 text-sm text-muted-foreground">
                <span className="border px-2 py-0.5 rounded text-xs">{inputs.niche}</span>
                <span className="border px-2 py-0.5 rounded text-xs">{inputs.audience}</span>
             </div>
          </div>
          <div className="flex gap-2">
             <button onClick={() => setStep(1)} className="btn-secondary">
               <RefreshCw className="mr-2 w-4 h-4"/> Reset
             </button>
             <button onClick={() => window.print()} className="btn-secondary">
               <Download className="mr-2 w-4 h-4"/> Export
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pb-10 pr-2">
          {ideas.map((idea) => (
             <div key={idea.id} className="card-base p-5 flex flex-col h-full hover:border-primary/50 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-muted-foreground border px-1.5 rounded">{String(idea.id).padStart(2, '0')}</span>
                      <span className="badge border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                         {idea.type}
                      </span>
                   </div>
                   <button 
                     onClick={() => handleCopy(idea.hook, idea.id)}
                     className="text-muted-foreground hover:text-foreground transition-colors"
                   >
                     {copied === idea.id ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100"/>}
                   </button>
                </div>
                
                <p className="text-sm font-medium leading-relaxed mb-6 flex-grow">
                   {idea.hook}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto pt-4 border-t text-xs text-muted-foreground">
                   <div>
                      <span className="block opacity-50 mb-0.5">Focus</span>
                      <span className="font-medium text-foreground">{idea.angle}</span>
                   </div>
                   <div className="text-right">
                      <span className="block opacity-50 mb-0.5">Format</span>
                      <span className="font-medium text-foreground">{idea.format}</span>
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
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
