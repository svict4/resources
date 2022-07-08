import "../styles.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import {
  createGlobalStyle,
  ThemeProvider,
  Preflight,
  ColorModeProvider,
  th,
} from "@xstyled/styled-components";
import { theme } from "components/config/theme";
const GlobalStyle = createGlobalStyle`
  ${th("global")}
`;

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyle />
        <TinaProvider>
          <Component {...pageProps} />
        </TinaProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
