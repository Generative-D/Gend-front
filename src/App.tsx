import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  WalletProvider,
  useInitializeProviders,
  PROVIDER_ID,
} from "@txnlab/use-wallet";
import { PeraWalletConnect } from "@perawallet/connect";
import Gen from "./pages/gen";
import Market from "./pages/market";
import Mine from "./pages/mine";
import Header from "./components/header";
import algosdk from "algosdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const providers = useInitializeProviders({
    providers: [{ id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect }],
    nodeConfig: {
      network: "mainnet",
      nodeServer: "https://mainnet-api.algonode.cloud",
      nodePort: "NODE_PORT",
      nodeToken: "",
    },
    algosdkStatic: algosdk,
    debug: true,
  });
  const queryClient = new QueryClient();

  return (
    <>
      <WalletProvider value={providers}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Gen />} />
              <Route path="/mine" element={<Mine />} />
              <Route path="/market" element={<Market />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </WalletProvider>
    </>
  );
};

export default App;
