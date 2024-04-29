import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { GameProvider } from "@better-world-dev/game";

import appStyles from './styles/app.css?url';
import { LinksFunction } from "@remix-run/node";

export function Layout({ children }: { children: React.ReactNode }) {
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
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <GameProvider>
      <div className="app">
        <Outlet />
      </div>
    </GameProvider>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles }
];
