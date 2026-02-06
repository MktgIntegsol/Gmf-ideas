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
      body { background: white; }
      body * { visibility: hidden; }
      #print-area, #print-area * { visibility: visible; }
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
      button, .no-print, nav { display: none !important; }
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    }
  `}</style>
);

const GFMIdeasGenerator = () => {
  // --- ESTADO ---
  const [step, setStep] = useState(0); // 0: Intro, 1: Inputs, 2: Loading, 3: Ideas Board
  const [loadingText, setLoadingText] = useState('');
  
  // Inputs del Usuario
  const [inputs, setInputs] = useState({
    niche: '',           // Ej: Marketing Digital
    audience: '',        // Ej: CMOs de startups
    goal: '',            // Ej: Generar leads
    tone: 'profesional', // profesional, casual, disruptivo
    contentType: ''      // posts, carruseles, historias
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
      `Estudiando comportamiento de ${inputs.audience}...`,
      "Identificando gaps de contenido...",
      "Generando ángulos únicos...",
      "Optimizando hooks para engagement..."
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
    const { niche, audience, goal, tone } = inputs;

    // Generación dinámica de 12 ideas de contenido
    const generatedIdeas = [
      {
        id: 1,
        type: "Contrarian",
        hook: `"Deja de seguir las 'mejores prácticas' de ${niche}. Aquí está por qué."`,
        angle: `Cuestiona las creencias populares en ${niche} que ya no funcionan`,
        format: "Post de opinión con lista numerada",
        engagement: "Alto",
        cta: "¿Estás de acuerdo? 👇"
      },
      {
        id: 2,
        type: "Case Study",
        hook: `"Cómo ayudamos a ${audience} a ${goal} en 90 días (sin gastar en ads)"`,
        angle: `Historia de transformación con métricas específicas`,
        format: "Narrativa con antes/después",
        engagement: "Muy Alto",
        cta: "¿Quieres saber cómo? DM abierto."
      },
      {
        id: 3,
        type: "Listicle",
        hook: `"7 señales de que estás haciendo ${niche} mal (y cómo arreglarlo)"`,
        angle: `Lista accionable de errores comunes y soluciones`,
        format: "Post con bullets + mini-tips",
        engagement: "Alto",
        cta: "¿Cuál es tu mayor error? Comenta."
      },
      {
        id: 4,
        type: "Behind the Scenes",
        hook: `"Lo que nadie te cuenta sobre ${niche}: mi experiencia real"`,
        angle: `Transparencia radical sobre fracasos y aprendizajes`,
        format: "Historia personal vulnerable",
        engagement: "Medio-Alto",
        cta: "Si has pasado por esto, comparte tu historia."
      },
      {
        id: 5,
        type: "Data-Driven",
        hook: `"Analicé 500 perfiles de ${audience}. Esto es lo que descubrí."`,
        angle: `Insights basados en datos + visualización`,
        format: "Post con estadísticas sorprendentes",
        engagement: "Muy Alto",
        cta: "Descarga el informe completo (link en comentarios)"
      },
      {
        id: 6,
        type: "Myth Busting",
        hook: `"El mito más peligroso en ${niche} que está matando tu crecimiento"`,
        angle: `Desmonta una creencia limitante con evidencia`,
        format: "Argumento persuasivo",
        engagement: "Alto",
        cta: "¿Te han vendido esta mentira?"
      },
      {
        id: 7,
        type: "Framework",
        hook: `"Mi framework de 3 pasos para ${goal} (probado con +100 clientes)"`,
        angle: `Sistema replicable y práctico`,
        format: "Carrusel educativo",
        engagement: "Muy Alto",
        cta: "Guarda esto para después 📌"
      },
      {
        id: 8,
        type: "Trend Analysis",
        hook: `"Por qué 2026 será el año en que ${niche} cambie para siempre"`,
        angle: `Predicción audaz con fundamento`,
        format: "Análisis de tendencias",
        engagement: "Medio-Alto",
        cta: "RemindMe en diciembre 2026"
      },
      {
        id: 9,
        type: "Comparison",
        hook: `"${niche} en 2020 vs ${niche} en 2026: La evolución que nadie vio venir"`,
        angle: `Contraste visual de cómo ha cambiado el juego`,
        format: "Post comparativo",
        engagement: "Medio",
        cta: "¿Qué más ha cambiado? Añade lo tuyo."
      },
      {
        id: 10,
        type: "Tool Stack",
        hook: `"Las 5 herramientas que uso todos los días para ${goal}"`,
        angle: `Stack de productividad revelado`,
        format: "Lista con mini-reviews",
        engagement: "Alto",
        cta: "¿Qué herramienta te cambió la vida?"
      },
      {
        id: 11,
        type: "Provocative Question",
        hook: `"¿Y si todo lo que sabes sobre ${niche} está obsoleto?"`,
        angle: `Pregunta incómoda que obliga a reflexionar`,
        format: "Post corto con pregunta abierta",
        engagement: "Medio-Alto",
        cta: "Responde sinceramente 👇"
      },
      {
        id: 12,
        type: "Playbook",
        hook: `"El playbook exacto que usamos para ${goal} cada mes"`,
        angle: `Paso a paso transparente de tu proceso`,
        format: "Thread o carrusel detallado",
        engagement: "Muy Alto",
        cta: "Quieres el template? Déjame un emoji 🔥"
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
      case 'Muy Alto': return 'text-green-600 bg-green-50';
      case 'Alto': return 'text-blue-600 bg-blue-50';
      case 'Medio-Alto': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  // --- COMPONENTES DE VISTA ---

  // 1. INPUTS FORM
  const renderInputs = () => (
    <div className="max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-light text-slate-900 mb-2">Configura tu Generador</h2>
        <p className="text-slate-500">Cuéntanos sobre tu nicho y audiencia para generar ideas personalizadas.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-400">Tu Nicho/Expertise</label>
            <input 
              type="text" 
              placeholder="Ej: Marketing Digital, IA, HR Tech..." 
              className="w-full p-3 border border-slate-200 rounded-lg focus:border-black outline-none transition-colors"
              value={inputs.niche}
              onChange={(e) => setInputs({...inputs, niche: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-400">Audiencia Objetivo</label>
            <input 
              type="text" 
              placeholder="Ej: Founders, CMOs, Recruiters..." 
              className="w-full p-3 border border-slate-200 rounded-lg focus:border-black outline-none transition-colors"
              value={inputs.audience}
              onChange={(e) => setInputs({...inputs, audience: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
             <label className="text-xs font-bold uppercase text-slate-400">Objetivo Principal</label>
             <select 
               className="w-full p-3 border border-slate-200 rounded-lg focus:border-black outline-none bg-white"
               value={inputs.goal}
               onChange={(e) => setInputs({...inputs, goal: e.target.value})}
             >
                <option value="">Selecciona...</option>
                <option value="Generar leads">Generar leads</option>
                <option value="Construir autoridad">Construir autoridad</option>
                <option value="Aumentar visibilidad">Aumentar visibilidad</option>
                <option value="Educar al mercado">Educar al mercado</option>
             </select>
          </div>
          <div className="space-y-2">
             <label className="text-xs font-bold uppercase text-slate-400">Tono de Voz</label>
             <select 
               className="w-full p-3 border border-slate-200 rounded-lg focus:border-black outline-none bg-white"
               value={inputs.tone}
               onChange={(e) => setInputs({...inputs, tone: e.target.value})}
             >
                <option value="profesional">Profesional</option>
                <option value="casual">Casual / Cercano</option>
                <option value="disruptivo">Disruptivo / Polémico</option>
             </select>
          </div>
        </div>

        <button 
          onClick={runSimulation}
          disabled={!inputs.niche || !inputs.audience || !inputs.goal}
          className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" /> Generar 12 Ideas de Contenido
        </button>
      </div>
    </div>
  );

  // 2. LOADING SCREEN
  const renderLoading = () => (
    <div className="flex flex-col items-center justify-center h-full animate-in fade-in duration-500">
       <div className="w-16 h-16 border-4 border-slate-200 border-t-black rounded-full animate-spin mb-8"></div>
       <h3 className="text-2xl font-light text-slate-900 mb-2">Generando Ideas Virales</h3>
       <p className="text-slate-500 font-mono text-sm h-6">{loadingText}</p>
    </div>
  );

  // 3. IDEAS BOARD
  const renderIdeasBoard = () => (
    <div className="h-full flex flex-col overflow-hidden">
       {/* Toolbar */}
       <div className="flex justify-between items-center mb-6 px-1 no-print">
          <button onClick={() => setStep(1)} className="text-slate-400 hover:text-black flex items-center gap-2 text-sm transition-colors">
             <RefreshCw className="w-4 h-4"/> Generar Nuevas Ideas
          </button>
          <button onClick={() => window.print()} className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors">
             <Download className="w-4 h-4"/> Guardar PDF
          </button>
       </div>

       {/* Printable Area */}
       <div id="print-area" className="flex-1 overflow-y-auto pr-2 space-y-6 pb-10">
          
          {/* Header Report */}
          <div className="border-b-2 border-black pb-6">
             <div className="flex justify-between items-end">
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">CONTENT STRATEGY BOARD</p>
                   <h1 className="text-4xl font-light text-slate-900">Ideas para <span className="font-bold">{inputs.niche}</span></h1>
                   <p className="text-xl text-slate-600 mt-1">Audiencia: {inputs.audience} • Objetivo: {inputs.goal}</p>
                </div>
                <div className="text-right">
                   <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold mb-1 ml-auto">GFM</div>
                   <p className="text-xs text-slate-400">Ideas Engine</p>
                </div>
             </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {ideas.map((idea) => (
                <div key={idea.id} className="group bg-white border-2 border-slate-100 rounded-xl p-5 hover:border-black transition-all hover:shadow-xl">
                   
                   {/* Header */}
                   <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                            {idea.id}
                         </div>
                         <span className="text-xs font-bold uppercase text-slate-400">{idea.type}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getEngagementColor(idea.engagement)}`}>
                         {idea.engagement}
                      </span>
                   </div>

                   {/* Hook */}
                   <div className="mb-4 relative">
                      <p className="text-base font-semibold text-slate-900 leading-snug pr-8">
                         {idea.hook}
                      </p>
                      <button 
                        onClick={() => handleCopy(idea.hook, `hook-${idea.id}`)}
                        className="absolute right-0 top-0 text-slate-300 hover:text-black transition-colors opacity-0 group-hover:opacity-100"
                      >
                         {copied === `hook-${idea.id}` ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                      </button>
                   </div>

                   {/* Details */}
                   <div className="space-y-2 mb-4 text-sm">
                      <div className="flex gap-2">
                         <Target className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0"/>
                         <p className="text-slate-600">{idea.angle}</p>
                      </div>
                      <div className="flex gap-2">
                         <Zap className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0"/>
                         <p className="text-slate-500 text-xs">{idea.format}</p>
                      </div>
                   </div>

                   {/* CTA Preview */}
                   <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-xs text-slate-600 italic">
                      CTA: {idea.cta}
                   </div>

                   {/* Engagement Icons (decorative) */}
                   <div className="flex gap-4 mt-4 pt-3 border-t border-slate-100 text-slate-300">
                      <div className="flex items-center gap-1 text-xs">
                         <ThumbsUp className="w-3 h-3"/> <span>250+</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                         <MessageCircle className="w-3 h-3"/> <span>45+</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                         <Share2 className="w-3 h-3"/> <span>15+</span>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* Pro Tips */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl mt-8">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400"/> Pro Tips para Maximizar Engagement
             </h3>
             <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-yellow-400">•</span> Publica en horarios de alta actividad: 8-10am y 5-7pm</li>
                <li className="flex gap-2"><span className="text-yellow-400">•</span> Usa saltos de línea para mejorar la legibilidad</li>
                <li className="flex gap-2"><span className="text-yellow-400">•</span> Responde a los primeros 5 comentarios en los primeros 30 minutos</li>
                <li className="flex gap-2"><span className="text-yellow-400">•</span> Testa diferentes hooks con la misma idea para optimizar CTR</li>
             </ul>
          </div>

       </div>
    </div>
  );

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4 font-sans text-slate-900">
      <PrintStyles />
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-100 z-10">
         
         {/* App Header */}
         <div className="h-16 border-b border-slate-100 flex justify-between items-center px-8 bg-white/80 backdrop-blur-sm z-20">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-gradient-to-br from-black to-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  GFM
               </div>
               <span className="font-bold text-sm tracking-widest uppercase">Ideas • Content Generator</span>
            </div>
            {step === 3 && (
               <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-slate-400"/>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">
                     {ideas.length} Ideas Generadas
                  </span>
               </div>
            )}
         </div>

         {/* Main Content */}
         <div className="flex-1 overflow-hidden p-8 bg-slate-50/50 relative">
            {step === 0 && (
               <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                     <Lightbulb className="w-12 h-12 text-white" />
                  </div>
                  <h1 className="text-5xl font-light text-slate-900 mb-6 tracking-tight">
                     Nunca te quedes sin <span className="font-bold">Ideas</span>
                  </h1>
                  <p className="text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
                     Genera 12 ideas de contenido viral para LinkedIn personalizadas a tu nicho, audiencia y objetivos. 
                     Impulsado por GFM Intelligence.
                  </p>
                  <button 
                     onClick={() => setStep(1)} 
                     className="bg-gradient-to-r from-black to-slate-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-slate-300"
                  >
                     Generar Ideas Ahora <ArrowRight className="w-5 h-5"/>
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