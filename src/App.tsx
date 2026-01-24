import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FrozenPipeCleanup from "./pages/FrozenPipeCleanup";
import FloodedBasementCleanup from "./pages/FloodedBasementCleanup";
import HardwoodFloorRepair from "./pages/HardwoodFloorRepair";
import CeilingWaterDamage from "./pages/CeilingWaterDamage";
import WetCarpetDrying from "./pages/WetCarpetDrying";
import SewageBackupCleanup from "./pages/SewageBackupCleanup";
import EmergencyBasementWaterRemoval from "./pages/EmergencyBasementWaterRemoval";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/frozen-pipe-burst-cleanup-rye-brook-ny" element={<FrozenPipeCleanup />} />
          <Route path="/flooded-basement-cleanup-cost-rye-brook-ny" element={<FloodedBasementCleanup />} />
          <Route path="/hardwood-floor-water-damage-repair-rye-brook-ny" element={<HardwoodFloorRepair />} />
          <Route path="/ceiling-water-damage-repair-rye-brook-ny" element={<CeilingWaterDamage />} />
          <Route path="/wet-carpet-drying-service-rye-brook-ny" element={<WetCarpetDrying />} />
          <Route path="/sewage-backup-cleanup-cost-rye-brook-ny" element={<SewageBackupCleanup />} />
          <Route path="/emergency-basement-water-removal-rye-brook-ny" element={<EmergencyBasementWaterRemoval />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
