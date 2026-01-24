import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingCallButton from "./components/ui/FloatingCallButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloodedGarageCleanup from "./pages/FloodedGarageCleanup";
import StormRunoffCleanup from "./pages/StormRunoffCleanup";
import DrainageFailureCleanup from "./pages/DrainageFailureCleanup";
import MudslideCleanup from "./pages/MudslideCleanup";
import EmergencyPumpOut from "./pages/EmergencyPumpOut";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingCallButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/flooded-garage-water-removal-tiburon-ca" element={<FloodedGarageCleanup />} />
          <Route path="/storm-runoff-cleanup-tiburon-ca" element={<StormRunoffCleanup />} />
          <Route path="/hillside-drainage-failure-cleanup-tiburon-ca" element={<DrainageFailureCleanup />} />
          <Route path="/mudslide-cleanup-tiburon-ca" element={<MudslideCleanup />} />
          <Route path="/emergency-pump-out-service-tiburon-ca" element={<EmergencyPumpOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
