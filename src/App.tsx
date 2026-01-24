import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DishwasherLeakCleanup from "./pages/DishwasherLeakCleanup";
import WaterHeaterLeakCleanup from "./pages/WaterHeaterLeakCleanup";
import StormSurgeCleanup from "./pages/StormSurgeCleanup";
import BurstPipeCleanup from "./pages/BurstPipeCleanup";
import CeilingLeakRepair from "./pages/CeilingLeakRepair";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dishwasher-leak-water-damage-cleanup" element={<DishwasherLeakCleanup />} />
          <Route path="/water-heater-leak-cleanup" element={<WaterHeaterLeakCleanup />} />
          <Route path="/storm-surge-water-damage-cleanup" element={<StormSurgeCleanup />} />
          <Route path="/burst-pipe-water-damage-cleanup" element={<BurstPipeCleanup />} />
          <Route path="/ceiling-leak-water-damage-repair" element={<CeilingLeakRepair />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
