import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, Zap, ArrowRight, 
  TrendingUp, Download, RefreshCw, Sparkles, Target,
  Copy, Check, ThumbsUp, MessageCircle, Share2, Eye, Award
} from 'lucide-react';

// --- ESTILOS DE IMPRESIÓN (PDF) ---
const PrintStyles = () => (
  <style>{`
    @media print {
      @page { margin: 0; size: auto; }
      body { background: white !important; color: black !important; -webkit-print-color-adjust: exact; }
      #root { display: none !important; }
      #print-area, #print-area * { visibility: visible; display: block; position: relative; }
      #print-area {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        margin: 0;
        padding: 40px;
        background: white !important;
        color: black !important;
        z-index: 9999;
      }
      .no-print { display: none !important; }
      * { box-shadow: none !important; text-shadow: none !important; }
      .glass-card { border: 1px solid #ccc !important; background: none !important; break-inside: avoid; margin-bottom: 20px; }
      h1, h2, h3, p, span { color: black !important; }
    }
  `}</style>
);

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

  const runSimulation = () => {
    if (!inputs.niche || !inputs.audience) return;

    setStep(2); 
    
    const sequences = [
      "Iniciando escaneo neural...",
      `Sintonizando con audiencia: ${inputs.audience}...`,
      "Detectando patrones virales...",
      "Estructurando frameworks de persuasión...",
      "Finalizando matriz de contenido..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(sequences[i]);
      i++;
      if (i >= sequences.length) clearInterval(interval);
    }, 800);

    setTimeout(() => {
      generateIdeas();
      setStep(3);
      clearInterval(interval);
    }, 4500);
  };

  const generateIdeas = () => {
    const { niche, audience, goal } = inputs;
    const generatedIdeas = [
      { id: 1, type: "Contrarian", hook: `"Deja de seguir las 'mejores prácticas' de ${niche}. Aquí está por qué."`, angle: "Desafío al status quo", format: "Opinión", engagement: "Alto", cta: "¿Estás de acuerdo?" },
      { id: 2, type: "Case Study", hook: `"Cómo llevamos a ${audience} a cumplir ${goal} en 90 días."`, angle: "Prueba Social", format: "Historia", engagement: "Muy Alto", cta: "Leer caso completo" },
      { id: 3, type: "Mistakes", hook: `"7 señales de que tu estrategia en ${niche} está fallando."`, angle: "Miedo a perder (FOMO)", format: "Lista", engagement: "Alto", cta: "Audita tu estrategia" },
      { id: 4, type: "Behind Scenes", hook: `"Lo que nadie te dice sobre triunfar en ${niche}."`, angle: "Vulnerabilidad", format: "Personal", engagement: "Medio-Alto", cta: "Compartir" },
      { id: 5, type: "Framework", hook: `"El sistema de 3 pasos para ${goal} sin burnout."`, angle: "Utilidad pura", format: "Carrusel", engagement: "Muy Alto", cta: "Guardar post" },
      { id: 6, type: "Trend", hook: `"Por qué 2026 cambiará ${niche} para siempre."`, angle: "Visionario", format: "Análisis", engagement: "Alto", cta: "Opinar" },
      { id: 7, type: "Tool Stack", hook: `"Mi stack secreto para dominar ${niche} este año."`, angle: "Recursos", format: "Lista", engagement: "Muy Alto", cta: "Guardar" },
      { id: 8, type: "Comparison", hook: `"${niche}: Antes vs Ahora (La cruda realidad)."`, angle: "Evolución", format: "Visual", engagement: "Medio", cta: "Comentar" },
      { id: 9, type: "Myth Busting", hook: `"Mentiras que te han contado sobre ${goal}."`, angle: "Verdad Incómoda", format: "Texto", engagement: "Alto", cta: "Debatir" },
      { id: 10, type: "How-To", hook: `"Cómo lograr ${goal} aunque seas principiante."`, angle: "Accesibilidad", format: "Tutorial", engagement: "Muy Alto", cta: "Intentarlo" },
      { id: 11, type: "Story", hook: `"El día que casi abandono ${niche}..."`, angle: "Emocional", format: "Narrativa", engagement: "Muy Alto", cta: "Leer más" },
      { id: 12, type: "Hack", hook: `"Un truco de 5 minutos para ${goal}."`, angle: "Quick Win", format: "Reel/Corto", engagement: "Alto", cta: "Probar hoy" }
    ];
    setIdeas(generatedIdeas);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const renderInputs = () => (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Configura tu Motor</h2>
          <p className="text-slate-400 mb-10 text-lg">Define los parámetros exactos para tu próxima campaña viral.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-3">
              <label className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Nicho de Mercado</label>
              <input 
                type="text" 
                placeholder="Ej: Marketing B2B, SaaS, Fitness..." 
                className="w-full p-4 rounded-xl glass-input text-lg placeholder:text-slate-600"
                value={inputs.niche}
                onChange={(e) => setInputs({...inputs, niche: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Audiencia Objetivo</label>
              <input 
                type="text" 
                placeholder="Ej: CEOs, Estudiantes, Freelancers..." 
                className="w-full p-4 rounded-xl glass-input text-lg placeholder:text-slate-600"
                value={inputs.audience}
                onChange={(e) => setInputs({...inputs, audience: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-3 relative">
               <label className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Objetivo Principal</label>
               <select 
                 className="w-full p-4 rounded-xl glass-input text-lg appearance-none cursor-pointer"
                 value={inputs.goal}
                 onChange={(e) => setInputs({...inputs, goal: e.target.value})}
               >
                  <option value="" className="bg-slate-900">Seleccionar...</option>
                  <option value="Generar leads" className="bg-slate-900">Generar leads</option>
                  <option value="Construir autoridad" className="bg-slate-900">Construir autoridad</option>
                  <option value="Ventas directas" className="bg-slate-900">Ventas directas</option>
               </select>
               <div className="absolute right-4 bottom-4 pointer-events-none text-slate-400">▼</div>
            </div>
            <div className="space-y-3 relative">
               <label className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Tono de Voz</label>
               <select 
                 className="w-full p-4 rounded-xl glass-input text-lg appearance-none cursor-pointer"
                 value={inputs.tone}
                 onChange={(e) => setInputs({...inputs, tone: e.target.value})}
               >
                  <option value="profesional" className="bg-slate-900">Profesional</option>
                  <option value="disruptivo" className="bg-slate-900">Disruptivo / Polémico</option>
                  <option value="empático" className="bg-slate-900">Empático / Humano</option>
               </select>
               <div className="absolute right-4 bottom-4 pointer-events-none text-slate-400">▼</div>
            </div>
          </div>

          <button 
            onClick={runSimulation}
            disabled={!inputs.niche || !inputs.audience || !inputs.goal}
            className="w-full btn-glow py-5 rounded-2xl text-xl font-bold text-white flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale transition-all shadow-lg hover:shadow-purple-500/20"
          >
            <Sparkles className="w-6 h-6 animate-pulse" /> 
            <span>Generar Matriz de Ideas</span>
          </button>

        </div>
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className="flex flex-col items-center justify-center h-[60vh] relative">
       <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
       
       <div className="relative z-10 flex flex-col items-center">
         <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-t-4 border-purple-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-r-4 border-blue-500 rounded-full animate-spin reverse duration-1000"></div>
         </div>
         <h3 className="text-4xl font-light text-white mb-4 tracking-tight">Procesando</h3>
         <div className="bg-white/5 px-6 py-2 rounded-full border border-white/10">
            <p className="text-purple-300 font-mono text-sm animate-pulse">{loadingText}</p>
         </div>
       </div>
    </div>
  );

  const renderIdeasBoard = () => (
    <div className="h-full flex flex-col">
       {/* Toolbar */}
       <div className="flex flex-wrap justify-between items-center mb-8 gap-4 no-print">
          <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white flex items-center gap-3 transition-colors group px-4 py-2 hover:bg-white/5 rounded-lg">
             <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"/>
             <span className="font-medium">Nueva Sesión</span>
          </button>
          <button onClick={() => window.print()} className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all border border-slate-700 font-medium">
             <Download className="w-5 h-5"/> <span>Exportar PDF</span>
          </button>
       </div>

       {/* Printable Area */}
       <div id="print-area" className="flex-1 overflow-y-auto pb-20">
          
          {/* Header Report */}
          <div className="border-b border-gray-800 pb-10 mb-10">
             <div className="flex justify-between items-end">
                <div>
                   <p className="text-xs font-bold text-emerald-400 uppercase tracking-[0.3em] mb-2 no-print flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Sistema Activo
                   </p>
                   <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                     Matriz de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Contenido</span>
                   </h1>
                   <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-300">
                     <span className="bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">🎯 {inputs.niche}</span>
                     <span className="bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">👥 {inputs.audience}</span>
                   </div>
                </div>
                <div className="hidden md:block">
                   <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-purple-900/40">GFM</div>
                </div>
             </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
             {ideas.map((idea) => (
                <div key={idea.id} className="glass-card rounded-2xl p-6 relative group flex flex-col h-full">
                   
                   <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 text-xs font-bold border border-white/10">
                            {idea.id}
                         </div>
                         <span className="text-xs font-bold uppercase tracking-wider text-purple-400">{idea.type}</span>
                      </div>
                      <span className="text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                         {idea.engagement} Impact
                      </span>
                   </div>

                   <div className="mb-6 flex-grow">
                      <p className="text-lg font-medium text-slate-200 leading-snug group-hover:text-white transition-colors">
                         {idea.hook}
                      </p>
                   </div>

                   <div className="space-y-3 pt-4 border-t border-white/5">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Ángulo</span>
                        <span className="text-slate-300 font-medium">{idea.angle}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Formato</span>
                        <span className="text-slate-300 font-medium">{idea.format}</span>
                      </div>
                   </div>

                   <button 
                     onClick={() => handleCopy(idea.hook, `hook-${idea.id}`)}
                     className="mt-5 w-full py-3 rounded-xl bg-white/5 hover:bg-purple-500/20 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium border border-white/5 hover:border-purple-500/30"
                   >
                      {copied === `hook-${idea.id}` ? <><Check className="w-4 h-4 text-green-400"/> Copiado</> : <><Copy className="w-4 h-4"/> Copiar Hook</>}
                   </button>
                </div>
             ))}
          </div>

          <div className="glass-panel p-8 rounded-3xl mt-12 bg-gradient-to-r from-yellow-500/10 to-transparent border-l-4 border-l-yellow-500/50">
             <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                <Lightbulb className="w-6 h-6 text-yellow-400"/> Optimizadores Virales
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-300">
                <div className="p-4 bg-black/20 rounded-xl">
                   <p className="font-bold text-yellow-400 mb-1">⏱️ Timing</p>
                   Publica de Martes a Jueves, 08:00 - 10:00 AM.
                </div>
                <div className="p-4 bg-black/20 rounded-xl">
                   <p className="font-bold text-yellow-400 mb-1">🎣 The Hook</p>
                   El 80% del éxito es la primera frase. Dedica tiempo.
                </div>
                <div className="p-4 bg-black/20 rounded-xl">
                   <p className="font-bold text-yellow-400 mb-1">💬 Engagement</p>
                   Responde comentarios con preguntas para crear hilos.
                </div>
                <div className="p-4 bg-black/20 rounded-xl">
                   <p className="font-bold text-yellow-400 mb-1">🔄 Iteración</p>
                   Si funciona, repite el formato con otro tema.
                </div>
             </div>
          </div>

       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white selection:bg-purple-500/30 overflow-x-hidden">
      <PrintStyles />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
         <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-blue-900/20 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex flex-col min-h-screen">
         
         {/* Navbar */}
         <div className="flex justify-between items-center h-20 mb-8">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  G
               </div>
               <div>
                  <h1 className="leading-none font-bold text-xl tracking-wide">GFM<span className="font-light text-slate-400">IDEAS</span></h1>
                  <p className="text-[10px] text-purple-400 uppercase tracking-[0.2em] font-semibold">Intelligence Module v2.0</p>
               </div>
            </div>
            
            {step > 0 && (
               <div className="hidden md:flex items-center gap-3 pl-6 border-l border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                  <span className="text-xs font-mono text-slate-400">SYSTEM ONLINE</span>
               </div>
            )}
         </div>

         {/* Content Area */}
         <div className="flex-1 flex flex-col justify-center">
            {step === 0 && (
               <div className="flex flex-col items-center justify-center text-center py-20 relative">
                  
                  <div className="w-32 h-32 mb-10 relative group cursor-pointer animate-float">
                     <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <Sparkles className="w-16 h-16 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                     </div>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight max-w-4xl mx-auto leading-[1.1]">
                     El Generador de Ideas <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white">Definitivo</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                     Desbloquea 12 ángulos virales personalizados para tu marca en segundos. <span className="text-white font-medium">Sin bloqueos creativos.</span>
                  </p>
                  
                  <button 
                     onClick={() => setStep(1)} 
                     className="group relative px-10 py-5 bg-white text-slate-950 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                  >
                     <span className="relative z-10 flex items-center gap-2">
                        Comenzar Ahora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                     </span>
                  </button>
               </div>
            )}

            {step === 1 && renderInputs()}
            {step === 2 && renderLoading()}
            {step === 3 && renderIdeasBoard()}
         </div>

         {/* Footer */}
         <div className="h-16 flex items-center justify-center text-xs text-slate-600 font-mono mt-8">
            GFM INTELLIGENCE SYSTEMS © 2026
         </div>

      </div>
    </div>
  );
};

export default GFMIdeasGenerator;
