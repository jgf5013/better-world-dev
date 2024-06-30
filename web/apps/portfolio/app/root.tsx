import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";

import { LinksFunction } from "@remix-run/node";
import tailwindStyles from "./tailwind.css?url";
import appStyles from "./styles.css?url";

const ROUTES_WITH_JS: string[] = [];

export function Layout({ children }: { children: React.ReactNode }) {

  const matches = useMatches();
  const includeScripts =matches.some((match) => ROUTES_WITH_JS.includes(match.pathname));

  return (
    <html lang="en">
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
  );
}

export default function App() {
  return <Outlet />;
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: appStyles },
];