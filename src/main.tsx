import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import theme from "./theme";
import "./index.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
                <Analytics />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>,
);
