import React, { useState } from 'react';
import {
    Zap, ArrowRight, Download, RefreshCw,
    Copy, Check, ShieldCheck, FileText, Image as ImageIcon, ExternalLink, Sparkles, Loader2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// --- Sub-componentes extraídos para evitar re-renders innecesarios ---

const Navbar = ({ step, onReset }) => (
    <nav className="w-full h-16 border-b bg-background/80 backdrop-blur fixed top-0 z-50 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onReset}>
            <img src="/src/assets/gfm-logo.png" alt="GFM Logo" className="w-12 h-12 object-contain" />
            <div className="leading-tight">
                <h1 className="font-bold text-sm text-foreground tracking-wide">Ideas de post <span className="text-muted-foreground font-normal">para LinkedIn</span></h1>
            </div>
        </div>
        <div className="flex items-center gap-4">
            {step > 0 && (
                <Button variant="ghost" size="sm" onClick={onReset} className="hidden md:flex">
                    Volver al Inicio
                </Button>
            )}
            {step > 0 && (
                <Badge variant="outline" className="gap-2 bg-emerald-500/10 border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/10">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    Sistema Activo
                </Badge>
            )}
        </div>
    </nav>
);

const Intro = ({ onStart }) => (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center pt-16">
        <Badge variant="secondary" className="mb-8 gap-2 py-1.5 px-4 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Suite de Creación de Contenido
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-6 max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Estrategia de Contenido <br />
            <span className="text-primary">Inteligente.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Genera posts completos, prompts de imagen y estrategias de alto impacto a partir de tu contexto.
        </p>

        <Button
            onClick={onStart}
            size="lg"
            className="h-12 px-8 gap-2 text-base shadow-lg hover:shadow-primary/25 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300"
        >
            Inicializar Sistema <ArrowRight className="w-4 h-4" />
        </Button>
    </div>
);

const InputForm = ({ inputs, setInputs, onRun }) => (
    <div className="min-h-[85vh] flex items-center justify-center px-4 pt-20 pb-10">
        <Card className="w-full max-w-2xl animate-in fade-in zoom-in-95 duration-300 border-muted">
            <CardHeader className="mb-2">
                <CardTitle>Configurar Parámetros</CardTitle>
                <CardDescription>Define el contexto y objetivo para tu matriz de generación.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="context">Contexto (Opcional)</Label>
                    <Textarea
                        id="context"
                        placeholder="Pega aquí una URL, un fragmento de texto o describe tu producto/servicio para dar contexto..."
                        value={inputs.context}
                        onChange={(e) => setInputs({ ...inputs, context: e.target.value })}
                        className="resize-none h-24"
                    />
                    <p className="text-[10px] text-muted-foreground">La IA analizará este texto para personalizar los resultados.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="niche">Nicho / Industria</Label>
                        <Input
                            id="niche"
                            name="niche"
                            placeholder="ej. B2B SaaS, Marketing..."
                            value={inputs.niche}
                            onChange={(e) => setInputs({ ...inputs, niche: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="audience">Audiencia Objetivo</Label>
                        <Input
                            id="audience"
                            name="audience"
                            placeholder="ej. CTOs, Fundadores..."
                            value={inputs.audience}
                            onChange={(e) => setInputs({ ...inputs, audience: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="goal">Objetivo Principal</Label>
                        <Select value={inputs.goal} onValueChange={(val) => setInputs(prev => ({ ...prev, goal: val }))}>
                            <SelectTrigger id="goal">
                                <SelectValue placeholder="Seleccionar objetivo..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Lead Generation">Generación de Leads</SelectItem>
                                <SelectItem value="Thought Leadership">Liderazgo de Pensamiento</SelectItem>
                                <SelectItem value="Brand Awareness">Conciencia de Marca</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tone">Tono de Voz</Label>
                        <Select value={inputs.tone} onValueChange={(val) => setInputs(prev => ({ ...prev, tone: val }))}>
                            <SelectTrigger id="tone">
                                <SelectValue placeholder="Seleccionar tono..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Profesional">Profesional</SelectItem>
                                <SelectItem value="Contrarian">Contrarian (Polémico)</SelectItem>
                                <SelectItem value="Empathetic">Empático</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="pt-2">
                <Button
                    onClick={onRun}
                    disabled={!inputs.niche || !inputs.audience || !inputs.goal}
                    className="w-full h-11 text-base font-semibold"
                >
                    <Zap className="mr-2 h-4 w-4" /> Generar Matriz
                </Button>
            </CardFooter>
        </Card>
    </div>
);

const Loading = ({ loadingText }) => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 animate-in fade-in duration-500">
        <div className="relative w-16 h-16 mb-8">
            <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-r-2 border-primary/50 rounded-full animate-spin reverse duration-1000"></div>
        </div>
        <h3 className="text-xl font-medium text-foreground mb-2">Procesando Datos</h3>
        <p className="text-muted-foreground font-mono text-sm bg-muted px-3 py-1 rounded-md border border-border">{loadingText}</p>
    </div>
);

const IdeaDetail = ({ idea, inputs }) => {
    const [generatedCopy, setGeneratedCopy] = useState("");
    const [generatedImage, setGeneratedImage] = useState(null);
    const [isGeneratingCopy, setIsGeneratingCopy] = useState(false);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);

    const handleGenerateCopy = () => {
        setIsGeneratingCopy(true);
        setTimeout(() => {
            // Editor Chief Logic: Rewriting for Viral Impact

            // 1. Hook Optimization (Direct assertion, no questions)
            const rawHook = idea.hook.replace(/"/g, '');
            // Transform common question hooks to assertions if needed, or keep strong statements
            const hook = rawHook.includes("¿")
                ? `Estás perdiendo dinero con tu estrategia de ${inputs.niche}.` // Fallback strong hook
                : rawHook;

            // 2. Rhythm & Cadence (Short sentences, visual breaks)
            const breakLine = "Y duele admitirlo.";

            // Body: Mobile-first, no fluff, conversational
            const body = `La mayoría de ${inputs.audience} comete el mismo error.
            
Creen que más es mejor.
Se equivocan.

Lo he visto cientos de veces en equipos que buscan ${inputs.goal}.
Se ahogan en tácticas. Olvidan la estrategia.

Aquí está el cambio de mentalidad que necesitas:

• **Audita sin piedad.** Si no trae ROI, mátalo.
• **Simplifica el proceso.** La complejidad es enemiga de la ejecución.
• **Sistematiza.** No dependas de la inspiración.

No necesitas más herramientas.
Necesitas **foco radical**.`;

            const conclusion = "Menos ruido. Más señal.";
            const cta = `¿Cuál es tu mayor distracción hoy? 👇`;

            const fullCopy = `${hook}\n\n${breakLine}\n\n${body}\n\n${conclusion}\n\n${cta}\n\n#${inputs.niche.replace(/\s/g, "")} #${inputs.audience.replace(/\s/g, "")} #Growth #NoFluff`;

            setGeneratedCopy(fullCopy);
            setIsGeneratingCopy(false);
        }, 1500);
    };

    const handleGenerateImage = () => {
        setIsGeneratingImage(true);
        setGeneratedImage(null);

        // Art Director Logic
        const nicheTranslated = inputs.niche || "Business";
        let stylePrompt = "";

        // Logic to select style based on Idea Type / Angle
        // Style 1: Photorealism (Case Studies, Stories, Contrarian)
        if (["Caso de Estudio", "Contrarian", "Errores"].includes(idea.type) || ["Prueba Social", "Miedo"].includes(idea.angle)) {
            stylePrompt = `Cinematic photography of a professional environment related to ${nicheTranslated}, focused professional subject, depth of field, natural office lighting, 8k, ultra-realistic, professional color palette`;
        }
        // Style 2: Abstract 3D (Systems, Future, Trends)
        else if (["Futuro", "Sistema", "Framework"].includes(idea.type) || ["Tendencia", "Sistema"].includes(idea.angle)) {
            stylePrompt = `Abstract 3D composition representing ${nicheTranslated} concepts, isometric view, glass textures, matte finish, geometric shapes, soft studio lighting, clean tech color palette`;
        }
        // Style 3: Flat Vector (Insights, Data - Fallback)
        else {
            stylePrompt = `Modern corporate flat vector illustration of ${nicheTranslated} concept, clean lines, solid colors, minimalist design, professional blue and white palette`;
        }

        // Construct final prompt: [Subject+Context] + [Style] + [Colors] + [AR]
        // Note: Pollinations handles AR via width/height params, but we add it to prompt for "Art Director" feel in display
        const finalPrompt = `${stylePrompt}, --ar 4:5`;

        // Pollinations URL (4:5 Ratio approx 800x1000)
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(stylePrompt)}?width=800&height=1000&nologo=true`;

        // Preload image
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            setGeneratedImage({ url: imageUrl, prompt: finalPrompt });
            setIsGeneratingImage(false);
        };
        img.onerror = () => {
            // Fallback if fails
            setIsGeneratingImage(false);
        };
    };

    return (
        <div className="grid gap-6 py-4">
            <div className="grid gap-2">
                <Label>Hook Principal</Label>
                <div className="p-3 bg-muted rounded-md text-sm font-medium border">
                    {idea.hook}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button onClick={handleGenerateCopy} disabled={isGeneratingCopy || generatedCopy} className="w-full">
                    {isGeneratingCopy ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileText className="w-4 h-4 mr-2" />}
                    Generar Copy LinkedIn
                </Button>
                <Button onClick={handleGenerateImage} variant="outline" disabled={isGeneratingImage || generatedImage} className="w-full">
                    {isGeneratingImage ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <ImageIcon className="w-4 h-4 mr-2" />}
                    Generar Imagen
                </Button>
            </div>

            {generatedCopy && (
                <div className="grid gap-2 animate-in fade-in slide-in-from-top-2">
                    <div className="flex justify-between items-center">
                        <Label>Copy Generado</Label>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => navigator.clipboard.writeText(generatedCopy)}>
                            <Copy className="h-3 w-3" />
                        </Button>
                    </div>
                    <Textarea value={generatedCopy} readOnly className="h-40 font-mono text-xs bg-muted/50" />
                </div>
            )}

            {(generatedImage || isGeneratingImage) && (
                <div className="grid gap-2 animate-in fade-in slide-in-from-top-2">
                    <div className="flex justify-between items-center">
                        <Label>Imagen IA (Generada)</Label>
                        {generatedImage && (
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => window.open(generatedImage.url, '_blank')}>
                                <ExternalLink className="h-3 w-3" />
                            </Button>
                        )}
                    </div>

                    <div className="relative rounded-md overflow-hidden border bg-muted aspect-video flex items-center justify-center">
                        {isGeneratingImage ? (
                            <div className="text-center space-y-2">
                                <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                                <p className="text-xs text-muted-foreground animate-pulse">Renderizando píxeles...</p>
                            </div>
                        ) : generatedImage ? (
                            <img
                                src={generatedImage.url}
                                alt="AI Generated"
                                className="w-full h-full object-cover transition-all hover:scale-105"
                            />
                        ) : null}
                    </div>
                    {generatedImage && (
                        <div className="p-2 bg-muted/50 rounded-md text-[10px] font-mono border text-muted-foreground truncate">
                            Prompt: {generatedImage.prompt}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const Results = ({ ideas, inputs, handleCopy, onReset }) => (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 border-b pb-8">
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Matriz de Contenido</h2>
                <div className="flex gap-2">
                    <Badge variant="secondary" className="font-mono">{inputs.niche}</Badge>
                    <Badge variant="secondary" className="font-mono">{inputs.audience}</Badge>
                    {inputs.context && <Badge variant="outline" className="font-mono border-primary/20 text-primary">Con Contexto</Badge>}
                </div>
            </div>
            <div className="flex gap-3">
                <Button variant="outline" onClick={onReset} size="sm" className="gap-2">
                    <RefreshCw className="w-4 h-4" /> Reiniciar
                </Button>
                <Button variant="default" onClick={() => window.print()} size="sm" className="gap-2">
                    <Download className="w-4 h-4" /> Exportar PDF
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea) => (
                <Dialog key={idea.id}>
                    <DialogTrigger asChild>
                        <Card className="group hover:border-primary/50 transition-all hover:shadow-lg relative overflow-hidden flex flex-col h-full cursor-pointer active:scale-[0.98] duration-200">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="font-mono text-xs">{String(idea.id).padStart(2, '0')}</Badge>
                                        <Badge className="text-[10px] uppercase font-bold">{idea.type}</Badge>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow pt-4">
                                <p className="text-lg font-medium text-card-foreground group-hover:text-primary transition-colors leading-snug">
                                    {idea.hook}
                                </p>
                            </CardContent>
                            <CardFooter className="pt-4 border-t bg-muted/20 mt-auto grid grid-cols-2 gap-4">
                                <div>
                                    <span className="text-[10px] uppercase text-muted-foreground font-bold block mb-1">Ángulo</span>
                                    <span className="text-sm font-medium">{idea.angle}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] uppercase text-muted-foreground font-bold block mb-1">Formato</span>
                                    <span className="text-sm font-medium">{idea.format}</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <Badge>{idea.type}</Badge> Detalle de la Idea
                            </DialogTitle>
                            <DialogDescription>
                                Genera el contenido completo y los assets creativos para esta idea.
                            </DialogDescription>
                        </DialogHeader>
                        <IdeaDetail idea={idea} inputs={inputs} />
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    </div>
);

// --- Componente Principal ---

const GFMIdeasGenerator = () => {
    const [step, setStep] = useState(0);
    const [loadingText, setLoadingText] = useState('');

    const [inputs, setInputs] = useState({
        niche: '',
        audience: '',
        goal: '',
        tone: 'Profesional',
        contentType: '',
        context: ''
    });

    const [ideas, setIdeas] = useState([]);

    const resetSystem = () => {
        setStep(0);
        setInputs({
            niche: '',
            audience: '',
            goal: '',
            tone: 'Profesional',
            contentType: '',
            context: ''
        });
    };

    const runSimulation = () => {
        if (!inputs.niche || !inputs.audience) return;
        setStep(2);
        const sequences = [
            "Iniciando sistemas centrales...",
            inputs.context ? "Analizando contexto semántico..." : "Escaneando parámetros base...",
            `Analizando vector de mercado: ${inputs.niche}...`,
            "Calibrando resonancia de audiencia...",
            "Generando ángulos estratégicos...",
            "Compilando matriz final..."
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
        }, 4500);
    };

    const generateIdeas = () => {
        const { niche, audience, goal } = inputs;
        const generatedIdeas = [
            { id: 1, type: "Contrarian", hook: `"Deja de hacer ${niche} de la manera difícil. Aquí tienes la solución."`, angle: "Eficiencia", format: "Opinión", engagement: "Alto" },
            { id: 2, type: "Caso de Estudio", hook: `"Cómo ${audience} escaló sus resultados de ${goal} un 300%."`, angle: "Prueba Social", format: "Caso de Estudio", engagement: "Muy Alto" },
            { id: 3, type: "Errores", hook: `"Los 3 asesinos silenciosos de tu estrategia de ${niche}."`, angle: "Miedo", format: "Lista", engagement: "Alto" },
            { id: 4, type: "Insight", hook: `"Analicé al top 1% de líderes en ${niche}. Esto fue lo que encontré."`, angle: "Datos", format: "Análisis Profundo", engagement: "Alto" },
            { id: 5, type: "Framework", hook: `"Mi sistema probado para conseguir ${goal} sin esfuerzo."`, angle: "Sistema", format: "Guía", engagement: "Muy Alto" },
            { id: 6, type: "Futuro", hook: `"Hacia dónde se dirige ${niche} en los próximos 12 meses."`, angle: "Tendencia", format: "Predicción", engagement: "Medio" },
        ];
        setIdeas(generatedIdeas);
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar step={step} onReset={resetSystem} />
            <main>
                {step === 0 && <Intro onStart={() => setStep(1)} />}
                {step === 1 && <InputForm inputs={inputs} setInputs={setInputs} onRun={runSimulation} />}
                {step === 2 && <Loading loadingText={loadingText} />}
                {step === 3 && <Results ideas={ideas} inputs={inputs} handleCopy={() => { }} onReset={resetSystem} />}
            </main>
        </div>
    );
};

export default GFMIdeasGenerator;
