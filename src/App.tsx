import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmergencyWaterExtraction from "./pages/EmergencyWaterExtraction";
import CrawlSpaceWaterRemoval from "./pages/CrawlSpaceWaterRemoval";
import BurstPipeCleanup from "./pages/BurstPipeCleanup";
import ToiletOverflowCleanup from "./pages/ToiletOverflowCleanup";
import DishwasherLeakCleanup from "./pages/DishwasherLeakCleanup";
import WaterHeaterLeakCleanup from "./pages/WaterHeaterLeakCleanup";
import LeakDetectionServices from "./pages/LeakDetectionServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/emergency-water-extraction" element={<EmergencyWaterExtraction />} />
          <Route path="/crawl-space-water-removal" element={<CrawlSpaceWaterRemoval />} />
          <Route path="/burst-pipe-cleanup" element={<BurstPipeCleanup />} />
          <Route path="/toilet-overflow-cleanup" element={<ToiletOverflowCleanup />} />
          <Route path="/dishwasher-leak-cleanup" element={<DishwasherLeakCleanup />} />
          <Route path="/water-heater-leak-cleanup" element={<WaterHeaterLeakCleanup />} />
          <Route path="/leak-detection-water-damage-services" element={<LeakDetectionServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


