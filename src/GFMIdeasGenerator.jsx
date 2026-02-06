import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, Zap, ArrowRight, 
  TrendingUp, Download, RefreshCw, Sparkles, Target,
  Copy, Check, ThumbsUp, MessageCircle, Share2, Eye
} from 'lucide-react';

// --- ESTILOS DE IMPRESIÓN (PDF) ---
const PrintStyles = () => (
  <style>{`
    @media print {
      @page { margin: 0; size: auto; }
      body { background: white !important; color: black !important; }
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
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; text-shadow: none !important; box-shadow: none !important; border-color: #ddd !important; }
      .glass, .glass-card { background: none !important; border: 1px solid #ddd !important; color: black !important; box-shadow: none !important; }
      .text-gradient { background: none !important; -webkit-text-fill-color: black !important; color: black !important; }
      p, h1, h2, h3, span, li, div { color: black !important; }
      svg { color: black !important; }
    }
  `}</style>
);

const GFMIdeasGenerator = () => {
  // --- ESTADO ---
  const [step, setStep] = useState(0); // 0: Intro, 1: Inputs, 2: Loading, 3: Ideas Board
  const [loadingText, setLoadingText] = useState('');
  
  // Inputs del Usuario
  const [inputs, setInputs] = useState({
    niche: '',           
    audience: '',        
    goal: '',            
    tone: 'profesional', 
    contentType: ''      
  });

  // Ideas Generadas
  const [ideas, setIdeas] = useState([]);
  const [copied, setCopied] = useState(null);

  // --- LÓGICA DE SIMULACIÓN IA ---
  const runSimulation = () => {
    if (!inputs.niche || !inputs.audience) return;

    setStep(2); // Loading Screen
    
    const sequences = [
      "Analizando tendencias virales...",
      "Sincronizando con " + inputs.audience + "...",
      "Detectando patrones de alto engagement...",
      "Destilando ángulos únicos...",
      "Finalizando matriz de contenidos..."
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

    // Generación dinámica de 12 ideas de contenido
    const generatedIdeas = [
      {
        id: 1,
        type: "Contrarian",
        hook: "\"Deja de seguir las 'mejores prácticas' de " + niche + ". Aquí está por qué.\"",
        angle: `Cuestiona el status quo`,
        format: "Opinión / Lista",
        engagement: "Alto",
        cta: "¿Estás de acuerdo? 👇"
      },
      {
        id: 2,
        type: "Case Study",
        hook: "\"Cómo ayudamos a " + audience + " a lograr " + goal + " en 90 días.\"",
        angle: `Transformación real`,
        format: "Narrativa Datos",
        engagement: "Muy Alto",
        cta: "DM para más info."
      },
      {
        id: 3,
        type: "Listicle",
        hook: "\"7 señales de que estás haciendo " + niche + " mal (y cómo arreglarlo)\"",
        angle: `Errores comunes`,
        format: "Bullets + Tips",
        engagement: "Alto",
        cta: "¿Cuál es tu mayor error?"
      },
      {
        id: 4,
        type: "Behind Scenes",
        hook: "\"Lo que nadie te cuenta sobre " + niche + ": mi experiencia real\"",
        angle: `Transparencia radical`,
        format: "Historia Personal",
        engagement: "Medio-Alto",
        cta: "Comparte tu historia."
      },
      {
        id: 5,
        type: "Data-Driven",
        hook: "\"Analicé 500 perfiles de " + audience + ". Esto descubrí.\"",
        angle: `Insights únicos`,
        format: "Estadísticas",
        engagement: "Muy Alto",
        cta: "Link en comentarios"
      },
      {
        id: 6,
        type: "Myth Busting",
        hook: "\"El mito más peligroso en " + niche + " que frena tu crecimiento\"",
        angle: `Verdad vs Ficción`,
        format: "Argumentativo",
        engagement: "Alto",
        cta: "¿Te lo han dicho?"
      },
      {
        id: 7,
        type: "Framework",
        hook: "\"Mi sistema de 3 pasos para " + goal + " (probado con clientes)\"",
        angle: `Método Propio`,
        format: "Carrusel Educativo",
        engagement: "Muy Alto",
        cta: "Guarda esto 📌"
      },
      {
        id: 8,
        type: "Trend",
        hook: "\"Por qué 2026 será el año en que " + niche + " cambie para siempre\"",
        angle: `Predicción Futura`,
        format: "Análisis",
        engagement: "Medio-Alto",
        cta: "RemindMe 2026"
      },
      {
        id: 9,
        type: "Comparison",
        hook: "\"" + niche + " 2020 vs 2026: La evolución silenciosa\"",
        angle: `Antes vs Ahora`,
        format: "Comparativa",
        engagement: "Medio",
        cta: "¿Qué ha cambiado para ti?"
      },
      {
        id: 10,
        type: "Tool Stack",
        hook: "\"Las 5 herramientas que uso a diario para " + goal + "\"",
        angle: `Productividad`,
        format: "Lista Curada",
        engagement: "Alto",
        cta: "Tu herramienta favorita?"
      },
      {
        id: 11,
        type: "Question",
        hook: "\"¿Y si todo lo que sabes sobre " + niche + " está obsoleto?\"",
        angle: `Reflexión profunda`,
        format: "Pregunta Abierta",
        engagement: "Medio-Alto",
        cta: "Responde abajo 👇"
      },
      {
        id: 12,
        type: "Playbook",
        hook: "\"El playbook exacto que usamos para " + goal + " cada mes\"",
        angle: `Proceso Interno`,
        format: "Paso a paso",
        engagement: "Muy Alto",
        cta: "Comenta 'PLAYBOOK' 🔥"
      }
    ];

    setIdeas(generatedIdeas);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const getEngagementColor = (level) => {
    switch(level) {
      case 'Muy Alto': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Alto': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Medio-Alto': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  // --- COMPONENTES DE VISTA ---

  // 1. INPUTS FORM
  const renderInputs = () => (
    <div className="max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-light mb-3 text-gradient">Configura tu Motor</h2>
        <p className="text-slate-400 font-light text-lg">Define los parámetros para calibrar la IA a tu audiencia.</p>
      </div>

      <div className="glass p-8 rounded-3xl space-y-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700"></div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-purple-300/80 ml-1">Tu Nicho</label>
            <input 
              type="text" 
              placeholder="Ej: Marketing, IA..." 
              className="w-full p-4 rounded-xl glass-input"
              value={inputs.niche}
              onChange={(e) => setInputs({...inputs, niche: e.target.value})}
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-purple-300/80 ml-1">Audiencia</label>
            <input 
              type="text" 
              placeholder="Ej: CEOs, Juniors..." 
              className="w-full p-4 rounded-xl glass-input"
              value={inputs.audience}
              onChange={(e) => setInputs({...inputs, audience: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
             <label className="text-xs font-bold uppercase tracking-widest text-purple-300/80 ml-1">Objetivo</label>
             <div className="relative">
               <select 
                 className="w-full p-4 rounded-xl glass-input appearance-none"
                 value={inputs.goal}
                 onChange={(e) => setInputs({...inputs, goal: e.target.value})}
               >
                  <option value="" className="bg-slate-900 text-slate-400">Seleccionar...</option>
                  <option value="Generar leads" className="bg-slate-900">Generar leads</option>
                  <option value="Construir autoridad" className="bg-slate-900">Construir autoridad</option>
                  <option value="Visibilidad" className="bg-slate-900">Visibilidad</option>
               </select>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
             </div>
          </div>
          <div className="space-y-3">
             <label className="text-xs font-bold uppercase tracking-widest text-purple-300/80 ml-1">Vibe</label>
             <div className="relative">
               <select 
                 className="w-full p-4 rounded-xl glass-input appearance-none"
                 value={inputs.tone}
                 onChange={(e) => setInputs({...inputs, tone: e.target.value})}
               >
                  <option value="profesional" className="bg-slate-900">Profesional</option>
                  <option value="casual" className="bg-slate-900">Casual</option>
                  <option value="disruptivo" className="bg-slate-900">Disruptivo</option>
               </select>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
             </div>
          </div>
        </div>

        <button 
          onClick={runSimulation}
          disabled={!inputs.niche || !inputs.audience || !inputs.goal}
          className="w-full btn-primary py-5 rounded-xl text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale transition-all mt-4"
        >
          <Sparkles className="w-5 h-5 animate-pulse" /> 
          <span>Generar Matriz de Ideas</span>
        </button>
      </div>
    </div>
  );

  // 2. LOADING SCREEN
  const renderLoading = () => (
    <div className="flex flex-col items-center justify-center h-full animate-in fade-in duration-500 relative">
       {/* Orbes animados de fondo */}
       <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
       <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] animate-bounce delay-700"></div>

       <div className="relative z-10 flex flex-col items-center">
         <div className="w-20 h-20 border-4 border-white/10 border-t-purple-500 rounded-full animate-spin mb-8 shadow-[0_0_30px_rgba(168,85,247,0.4)]"></div>
         <h3 className="text-3xl font-light text-white mb-3 tracking-tight">Procesando Datos</h3>
         <p className="text-purple-300/80 font-mono text-sm h-6 animate-pulse">{loadingText}</p>
       </div>
    </div>
  );

  // 3. IDEAS BOARD
  const renderIdeasBoard = () => (
    <div className="h-full flex flex-col overflow-hidden relative z-10">
       {/* Toolbar */}
       <div className="flex justify-between items-center mb-8 px-2 no-print">
          <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm transition-colors group">
             <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10"><RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"/></div>
             <span>Reiniciar</span>
          </button>
          <button onClick={() => window.print()} className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 transition-all border border-white/10">
             <Download className="w-4 h-4"/> Exportar PDF
          </button>
       </div>

       {/* Printable Area */}
       <div id="print-area" className="flex-1 overflow-y-auto pr-2 space-y-8 pb-10 scrollbar-hide">
          
          {/* Header Report */}
          <div className="border-b border-white/10 pb-8">
             <div className="flex justify-between items-end">
                <div>
                   <div className="flex items-center gap-2 mb-2">
                     <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] no-print">LIVE SESSION</p>
                   </div>
                   <h1 className="text-5xl font-light text-white mb-2 tracking-tight">
                     Ideas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Generadas</span>
                   </h1>
                   <div className="flex gap-4 text-sm text-slate-400 font-mono mt-4">
                     <span className="bg-white/5 px-3 py-1 rounded border border-white/10">Nicho: {inputs.niche}</span>
                     <span className="bg-white/5 px-3 py-1 rounded border border-white/10">Target: {inputs.audience}</span>
                   </div>
                </div>
                <div className="text-right">
                   <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white mb-2 ml-auto shadow-lg shadow-purple-500/20">GFM</div>
                </div>
             </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             {ideas.map((idea) => (
                <div key={idea.id} className="glass-card rounded-2xl p-6 group relative overflow-hidden">
                   
                   {/* Gradient overlay on hover */}
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                   {/* Header */}
                   <div className="flex justify-between items-start mb-5 relative z-10">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 text-xs font-mono border border-white/10">
                            {idea.id.toString().padStart(2, '0')}
                         </div>
                         <span className="text-xs font-bold uppercase tracking-wider text-purple-300">{idea.type}</span>
                      </div>
                      <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide border ${getEngagementColor(idea.engagement)}`}>
                         {idea.engagement}
                      </span>
                   </div>

                   {/* Hook */}
                   <div className="mb-6 relative z-10">
                      <p className="text-lg font-medium text-slate-200 leading-snug pr-8 group-hover:text-white transition-colors">
                         {idea.hook}
                      </p>
                      <button 
                        onClick={() => handleCopy(idea.hook, `hook-${idea.id}`)}
                        className="absolute right-0 top-0 p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-purple-500/20 transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                      >
                         {copied === `hook-${idea.id}` ? <Check className="w-4 h-4 text-green-400"/> : <Copy className="w-4 h-4"/>}
                      </button>
                   </div>

                   {/* Details */}
                   <div className="grid grid-cols-2 gap-4 mb-5 text-sm relative z-10">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                         <div className="flex items-center gap-2 mb-1 text-slate-500 text-xs uppercase font-bold">
                            <Target className="w-3 h-3"/> Ángulo
                         </div>
                         <p className="text-slate-300 leading-tight">{idea.angle}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                         <div className="flex items-center gap-2 mb-1 text-slate-500 text-xs uppercase font-bold">
                            <Zap className="w-3 h-3"/> Formato
                         </div>
                         <p className="text-slate-300 leading-tight">{idea.format}</p>
                      </div>
                   </div>

                   {/* CTA */}
                   <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-between">
                      <p className="text-xs text-slate-500 font-mono">CTA: <span className="text-slate-400 italic">"{idea.cta}"</span></p>
                      <div className="flex gap-3">
                         <div className="flex items-center gap-1 text-xs text-slate-500">
                            <ThumbsUp className="w-3 h-3"/>
                         </div>
                         <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Share2 className="w-3 h-3"/>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* Pro Tips */}
          <div className="glass p-8 rounded-2xl mt-8 border-l-4 border-l-yellow-400">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                <Lightbulb className="w-5 h-5 text-yellow-400"/> Insights de Viralidad
             </h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
                <li className="flex gap-3 items-start"><span className="text-yellow-400 mt-1">●</span> <span>Publicar Martes a Jueves (8am - 10am) tiene 40% más impacto.</span></li>
                <li className="flex gap-3 items-start"><span className="text-yellow-400 mt-1">●</span> <span>Hooks de <b className="text-white">negatividad</b> ("Errores", "Mitos") tienen CTR x2.</span></li>
                <li className="flex gap-3 items-start"><span className="text-yellow-400 mt-1">●</span> <span>El CTA debe pedir una sola acción muy específica.</span></li>
                <li className="flex gap-3 items-start"><span className="text-yellow-400 mt-1">●</span> <span>Comenta en tu propio post pasados 10 min para reactivar el algo.</span></li>
             </ul>
          </div>

       </div>
    </div>
  );

  return (
    <div className="w-full h-screen overflow-hidden bg-slate-950 font-sans text-white selection:bg-purple-500/30">
      <PrintStyles />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col relative z-10 p-4 md:p-8">
         
         {/* App Header */}
         <div className="h-20 flex justify-between items-center mb-4 px-4">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-gradient-to-br from-white to-slate-400 rounded-xl flex items-center justify-center shadow-lg shadow-white/10">
                  <span className="text-slate-900 font-bold text-sm tracking-tighter">GFM</span>
               </div>
               <div>
                  <span className="block font-bold text-lg tracking-wide">IDEAS GEN</span>
                  <span className="block text-[10px] text-purple-300 uppercase tracking-[0.2em]">Intelligence Module</span>
               </div>
            </div>
            {step === 3 && (
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                     {ideas.length} Result.
                  </span>
               </div>
            )}
         </div>

         {/* Main Content Container */}
         <div className="flex-1 w-full max-w-6xl mx-auto relative">
            {step === 0 && (
               <div className="flex flex-col items-center justify-center h-[80vh] text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl -z-10 rounded-full"></div>
                  
                  <div className="w-24 h-24 mb-8 relative group cursor-pointer">
                     <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                     <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-500">
                        <Sparkles className="w-12 h-12 text-white" />
                     </div>
                  </div>

                  <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                     Domina tu <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-white">Contenido</span>
                  </h1>
                  
                  <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
                     Sistema inteligente de generación de ideas. <br/>
                     <span className="text-slate-500">Diseñado para creadores de alto rendimiento.</span>
                  </p>
                  
                  <button 
                     onClick={() => setStep(1)} 
                     className="group relative px-12 py-5 bg-white text-slate-950 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl hover:shadow-white/20"
                  >
                     <span className="relative z-10 flex items-center gap-2">
                        Iniciar Sistema <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                     </span>
                  </button>
               </div>
            )}

            {step === 1 && renderInputs()}
            {step === 2 && renderLoading()}
            {step === 3 && renderIdeasBoard()}
         </div>
      </div>
    </div>
  );
};

export default GFMIdeasGenerator;
