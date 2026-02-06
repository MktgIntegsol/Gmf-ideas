import React, { useState, useEffect } from 'react';
import { 
  Zap, ArrowRight, Download, RefreshCw, 
  Copy, Check, MoreHorizontal, Layers, 
  BarChart3, Settings, ShieldCheck
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
      "Initializing core systems...",
      `Analyzing market vector: ${inputs.niche}...`,
      "Calibrating audience resonance...",
      "Generating strategic angles...",
      "Compiling final matrix..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(sequences[i]);
      i++;
      if (i >= sequences.length) clearInterval(interval);
    }, 700);

    setTimeout(() => {
      generateIdeas();
      setStep(3);
      clearInterval(interval);
    }, 4000);
  };

  const generateIdeas = () => {
    const { niche, audience, goal } = inputs;
    const generatedIdeas = [
      { id: 1, type: "Contrarian", hook: `"Stop doing ${niche} the hard way. Here is the fix."`, angle: "Efficiency", format: "Opinion", engagement: "High" },
      { id: 2, type: "Case Study", hook: `"How ${audience} scaled their ${goal} results by 300%."`, angle: "Proof", format: "Case Study", engagement: "Very High" },
      { id: 3, type: "Mistakes", hook: `"The 3 silent killers of your ${niche} strategy."`, angle: "Fear", format: "Listicle", engagement: "High" },
      { id: 4, type: "Insight", hook: `"I analyzed top 1% of ${niche} leaders. Here is what I found."`, angle: "Data", format: "Deep Dive", engagement: "High" },
      { id: 5, type: "Framework", hook: `"My proven framework for effortless ${goal}."`, angle: "System", format: "Guide", engagement: "Very High" },
      { id: 6, type: "Future", hook: `"Where ${niche} is going in the next 12 months."`, angle: "Trend", format: "Prediction", engagement: "Medium" },
      { id: 7, type: "Tools", hook: `"The exact stack I use for ${goal}."`, angle: "Resource", format: "Curated List", engagement: "High" },
      { id: 8, type: "Comparison", hook: `"${niche} Veterans vs Beginners: The key difference."`, angle: "Mindset", format: "Comparison", engagement: "Medium" },
      { id: 9, type: "Unpopular Opinion", hook: `"Why everyone is wrong about ${goal}."`, angle: "Disruptive", format: "Statement", engagement: "High" },
      { id: 10, type: "How-To", hook: `"A simple guide to ${goal} for busy ${audience}."`, angle: "Simplicity", format: "Tutorial", engagement: "High" },
      { id: 11, type: "Story", hook: `"The biggest lesson I learned in ${niche}."`, angle: "Personal", format: "Story", engagement: "Very High" },
      { id: 12, type: "Quick Win", hook: `"One small tweak to improve your ${goal} today."`, angle: "Action", format: "Tip", engagement: "High" }
    ];
    setIdeas(generatedIdeas);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  // --- Components ---

  const Navbar = () => (
    <nav className="w-full h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur fixed top-0 z-50 flex items-center justify-between px-6 lg:px-12">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-900/20">
          G
        </div>
        <div className="leading-tight">
          <h1 className="font-bold text-sm text-white tracking-wide">GFM<span className="text-slate-400 font-normal">INTELLIGENCE</span></h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {step > 0 && (
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-emerald-400">System Active</span>
          </div>
        )}
      </div>
    </nav>
  );

  const Intro = () => (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center pt-16">
       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
         <ShieldCheck className="w-3 h-3 text-blue-400" /> Professional Grade Tool
       </div>
       
       <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
         Content Strategy <br/>
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Engineered.</span>
       </h1>
       
       <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
         Generate high-leverage content angles tailored specifically to your niche audience. 
         A precision tool for serious creators.
       </p>
       
       <button 
         onClick={() => setStep(1)} 
         className="group bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300"
       >
         Initialize System <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
       </button>
    </div>
  );

  const InputForm = () => (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Configure Parameters</h2>
          <p className="text-slate-400 text-sm">Define the target vector for your content generation matrix.</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Niche / Industry</label>
              <input 
                autoFocus
                type="text" 
                placeholder="e.g. B2B SaaS, Marketing..." 
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                value={inputs.niche}
                onChange={(e) => setInputs({...inputs, niche: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target Audience</label>
              <input 
                type="text" 
                placeholder="e.g. CTOs, Founders..." 
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                value={inputs.audience}
                onChange={(e) => setInputs({...inputs, audience: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Primary Goal</label>
              <div className="relative">
                <select 
                  className="w-full appearance-none bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer"
                  value={inputs.goal}
                  onChange={(e) => setInputs({...inputs, goal: e.target.value})}
                >
                  <option value="" className="text-slate-500">Select objective...</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Thought Leadership">Thought Leadership</option>
                  <option value="Brand Awareness">Brand Awareness</option>
                </select>
                <MoreHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tone of Voice</label>
              <div className="relative">
                <select 
                  className="w-full appearance-none bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer"
                  value={inputs.tone}
                  onChange={(e) => setInputs({...inputs, tone: e.target.value})}
                >
                  <option value="Professional">Professional</option>
                  <option value="Contrarian">Contrarian</option>
                  <option value="Empathetic">Empathetic</option>
                </select>
                <MoreHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none"/>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800">
          <button 
            onClick={runSimulation}
            disabled={!inputs.niche || !inputs.audience || !inputs.goal}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20"
          >
            <Zap className="w-5 h-5" /> Generate Ideas Matrix
          </button>
        </div>
      </div>
    </div>
  );

  const Loading = () => (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-in fade-in duration-500">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-3 border-r-4 border-indigo-500 rounded-full animate-spin reverse duration-1000 opacity-50"></div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Processing Data</h3>
      <div className="h-8 flex items-center">
        <span className="text-slate-400 font-mono text-sm">{loadingText}</span>
      </div>
    </div>
  );

  const Results = () => (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 border-b border-slate-800 pb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Content Matrix</h2>
          <div className="flex gap-2 text-sm">
             <span className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-md">{inputs.niche}</span>
             <span className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-md">{inputs.audience}</span>
          </div>
        </div>
        <div className="flex gap-3">
           <button onClick={() => setStep(1)} className="px-4 py-2 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 rounded-lg text-sm font-medium transition-all flex items-center gap-2">
             <RefreshCw className="w-4 h-4"/> Reset
           </button>
           <button onClick={() => window.print()} className="px-4 py-2 bg-white text-slate-950 rounded-lg text-sm font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
             <Download className="w-4 h-4"/> Export PDF
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="group bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl p-6 transition-all hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col h-full relative overflow-hidden">
            {/* Hover Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 blur transition duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">{String(idea.id).padStart(2, '0')}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">{idea.type}</span>
                </div>
                <button 
                  onClick={() => handleCopy(idea.hook, idea.id)}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  {copied === idea.id ? <Check className="w-4 h-4 text-emerald-500"/> : <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100"/>}
                </button>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
                  {idea.hook}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 mt-auto">
                <div>
                  <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Angle</span>
                  <span className="text-sm text-slate-300">{idea.angle}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Format</span>
                  <span className="text-sm text-slate-300">{idea.format}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <main>
        {step === 0 && <Intro />}
        {step === 1 && <InputForm />}
        {step === 2 && <Loading />}
        {step === 3 && <Results />}
      </main>
    </div>
  );
};

export default GFMIdeasGenerator;
