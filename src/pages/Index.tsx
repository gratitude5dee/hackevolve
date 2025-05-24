
import { ArrowRight, Sparkles, Code, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100">
              <Sparkles className="w-4 h-4" />
              Ready to build something amazing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              Your Blank Canvas
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A beautiful, modern foundation for your next project. 
              Built with React, TypeScript, and Tailwind CSS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl border-slate-200 hover:border-slate-300 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built with Modern Tools
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to create fast, beautiful, and scalable web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              TypeScript Ready
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Built with TypeScript for better development experience and type safety
            </p>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Beautiful Design
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Tailwind CSS and shadcn/ui components for stunning, responsive designs
            </p>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Modern Stack
            </h3>
            <p className="text-slate-600 leading-relaxed">
              React 18, Vite, React Query, and React Router for modern development
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-slate-600">
              Ready to turn your ideas into reality? Start building your app now.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
