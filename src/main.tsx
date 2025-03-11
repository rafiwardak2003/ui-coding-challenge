import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import App from "./App"
import { store } from "./store"
import theme from "./theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
