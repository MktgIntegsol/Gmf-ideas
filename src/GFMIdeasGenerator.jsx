import React, { useState, useEffect } from 'react';
import { 
  Zap, ArrowRight, Download, RefreshCw, 
  Copy, Check, ShieldCheck, Layers
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <nav className="w-full h-16 border-b bg-background/80 backdrop-blur fixed top-0 z-50 flex items-center justify-between px-6 lg:px-12">
      <div className="flex items-center gap-3">
        <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-sm">
          G
        </div>
        <div className="leading-tight">
          <h1 className="font-bold text-sm text-foreground tracking-wide">GFM<span className="text-muted-foreground font-normal">INTELLIGENCE</span></h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {step > 0 && (
          <Badge variant="outline" className="gap-2 bg-emerald-500/10 border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/10">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            System Active
          </Badge>
        )}
      </div>
    </nav>
  );

  const Intro = () => (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center pt-16">
       <Badge variant="secondary" className="mb-8 gap-2 py-1.5 px-4 text-xs font-medium">
         <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Professional Grade Tool
       </Badge>
       
       <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-6 max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
         Content Strategy <br/>
         <span className="text-primary">Engineered.</span>
       </h1>
       
       <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
         Generate high-leverage content angles tailored specifically to your niche audience. 
         Precision engineered for modern creators.
       </p>
       
       <Button 
         onClick={() => setStep(1)} 
         size="lg"
         className="h-12 px-8 gap-2 text-base shadow-lg hover:shadow-primary/25 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300"
       >
         Initialize System <ArrowRight className="w-4 h-4" />
       </Button>
    </div>
  );

  const InputForm = () => (
    <div className="min-h-[85vh] flex items-center justify-center px-4 pt-20 pb-10">
      <Card className="w-full max-w-2xl animate-in fade-in zoom-in-95 duration-300 border-muted">
        <CardHeader className="mb-2">
          <CardTitle>Configure Parameters</CardTitle>
          <CardDescription>Define the target vector for your content generation matrix.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Niche</Label>
              <Input 
                autoFocus
                placeholder="e.g. B2B SaaS" 
                value={inputs.niche}
                onChange={(e) => setInputs({...inputs, niche: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>Audience</Label>
              <Input 
                placeholder="e.g. CTOs" 
                value={inputs.audience}
                onChange={(e) => setInputs({...inputs, audience: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Goal</Label>
              <Select onValueChange={(val) => setInputs({...inputs, goal: val})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select objective..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Lead Generation">Lead Generation</SelectItem>
                  <SelectItem value="Thought Leadership">Thought Leadership</SelectItem>
                  <SelectItem value="Brand Awareness">Brand Awareness</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tone</Label>
              <Select onValueChange={(val) => setInputs({...inputs, tone: val})} defaultValue="Professional">
                <SelectTrigger>
                  <SelectValue placeholder="Select tone..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Professional">Professional</SelectItem>
                  <SelectItem value="Contrarian">Contrarian</SelectItem>
                  <SelectItem value="Empathetic">Empathetic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button 
            onClick={runSimulation}
            disabled={!inputs.niche || !inputs.audience || !inputs.goal}
            className="w-full h-11 text-base font-semibold"
          >
            <Zap className="mr-2 h-4 w-4" /> Generate Matrix
          </Button>
        </CardFooter>
      </Card>
    </div>
  );

  const Loading = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 animate-in fade-in duration-500">
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-2 border-primary/50 rounded-full animate-spin reverse duration-1000"></div>
      </div>
      <h3 className="text-xl font-medium text-foreground mb-2">Processing Data</h3>
      <p className="text-muted-foreground font-mono text-sm bg-muted px-3 py-1 rounded-md border border-border">{loadingText}</p>
    </div>
  );

  const Results = () => (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 border-b pb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Content Matrix</h2>
          <div className="flex gap-2">
             <Badge variant="secondary" className="font-mono">{inputs.niche}</Badge>
             <Badge variant="secondary" className="font-mono">{inputs.audience}</Badge>
          </div>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" onClick={() => setStep(1)} size="sm" className="gap-2">
             <RefreshCw className="w-4 h-4"/> Reset
           </Button>
           <Button variant="default" onClick={() => window.print()} size="sm" className="gap-2">
             <Download className="w-4 h-4"/> Export
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <Card key={idea.id} className="group hover:border-primary/50 transition-all hover:shadow-lg relative overflow-hidden flex flex-col h-full">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                   <Badge variant="outline" className="font-mono text-xs">{String(idea.id).padStart(2, '0')}</Badge>
                   <Badge className="text-[10px] uppercase font-bold">{idea.type}</Badge>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleCopy(idea.hook, idea.id)}>
                   {copied === idea.id ? <Check className="w-4 h-4 text-primary"/> : <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground"/>}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pt-4">
               <p className="text-lg font-medium text-card-foreground group-hover:text-primary transition-colors leading-snug">
                {idea.hook}
              </p>
            </CardContent>
            <CardFooter className="pt-4 border-t bg-muted/20 mt-auto grid grid-cols-2 gap-4">
               <div>
                  <span className="text-[10px] uppercase text-muted-foreground font-bold block mb-1">Angle</span>
                  <span className="text-sm font-medium">{idea.angle}</span>
               </div>
               <div className="text-right">
                  <span className="text-[10px] uppercase text-muted-foreground font-bold block mb-1">Format</span>
                  <span className="text-sm font-medium">{idea.format}</span>
               </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
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
