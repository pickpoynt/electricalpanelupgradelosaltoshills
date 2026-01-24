import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingCallButton from "./components/ui/FloatingCallButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SumpPumpFailureCleanup from "./pages/SumpPumpFailureCleanup";
import FloodedBasementRestoration from "./pages/FloodedBasementRestoration";
import SewageBackupCleanup from "./pages/SewageBackupCleanup";
import MoldRemediation from "./pages/MoldRemediation";
import BatteryBackupFailure from "./pages/BatteryBackupFailure";

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
          <Route path="/sump-pump-failure-cleanup-cohasset-ma" element={<SumpPumpFailureCleanup />} />
          <Route path="/flooded-basement-restoration-cohasset-ma" element={<FloodedBasementRestoration />} />
          <Route path="/sewage-backup-cleanup-cohasset-ma" element={<SewageBackupCleanup />} />
          <Route path="/mold-remediation-cohasset-ma" element={<MoldRemediation />} />
          <Route path="/battery-backup-failure-cleanup-cohasset-ma" element={<BatteryBackupFailure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
