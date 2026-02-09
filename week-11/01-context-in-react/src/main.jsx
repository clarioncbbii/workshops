import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//TODO: Provide our App with all the context values

import { Providers } from "./Providers.jsx";
//* (FYI!) In Next.js, we will wrap children within Providers in the root layout.js file!

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
