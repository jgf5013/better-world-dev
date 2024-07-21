import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";

import { LinksFunction } from "@remix-run/node";
import appStyles from "./styles.css?url";

import "@better-world-dev/elements/src/lib/styles.css";
import { ThemeContext, portfolioThemeSetter } from "@better-world-dev/elements";
import { portfolioTheme } from "./constants";
import { useContext } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import * as rootStyles from "./styles.root.css";


const ROUTES_WITH_JS: string[] = [];
const { backgroundRgbaDark, foregroundRgbaDark, backgroundRgbaLight, foregroundRgbaLight, baseStyles } = rootStyles;

const InnerLayout = ({ children }: { children: React.ReactNode }) => {


  const themeContext = useContext(ThemeContext);
  const theme = themeContext[0];

  const themeStyles = {
    /* dark mode */
    [backgroundRgbaDark]: theme.dark.backgroundRgba,
    [foregroundRgbaDark]: theme.dark.foregroundRgba,
    /* light mode */
    [backgroundRgbaLight]: theme.light.backgroundRgba,
    [foregroundRgbaLight]: theme.light.foregroundRgba,
  };

  const matches = useMatches();
  const includeScripts = matches.some((match) => ROUTES_WITH_JS.includes(match.pathname));
  return (
    <html
      lang="en"
      style={assignInlineVars(themeStyles)}
      className={baseStyles}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {includeScripts ? <Scripts /> : null}
      </body>
    </html>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {

  return (

    <ThemeContext.Provider value={[ portfolioTheme, portfolioThemeSetter ]}>
      <InnerLayout>{children}</InnerLayout>
    </ThemeContext.Provider>
  );
}

export default function App() {
  return <Outlet />;
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
];