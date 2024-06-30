import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, useMatches, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const tailwindStyles = "/assets/tailwind-C09GTDbg.css";
const appStyles = "/assets/styles-QQLy57Ad.css";
const ROUTES_WITH_JS = [];
function Layout({ children }) {
  const matches = useMatches();
  const includeScripts = matches.some((match) => ROUTES_WITH_JS.includes(match.pathname));
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      includeScripts ? /* @__PURE__ */ jsx(Scripts, {}) : null
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const links = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: appStyles }
];
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const PortfolioCard = ({ link, img, title, subtext, index }) => {
  const goTo = (link2) => {
    window.open(link2);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "card",
      onClick: () => goTo(link),
      onKeyDown: () => goTo(link),
      role: "button",
      tabIndex: index,
      children: /* @__PURE__ */ jsxs("div", { className: "m-4", children: [
        /* @__PURE__ */ jsx("div", { className: "img-container", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "cardImg",
            alt: img.alt,
            src: img.src,
            title: img.title
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h5", { children: title }),
          /* @__PURE__ */ jsx("p", { className: "typography", children: subtext })
        ] })
      ] })
    }
  );
};
const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  const goTo = (link) => {
    window.open(link);
  };
  return /* @__PURE__ */ jsx(
    "main",
    {
      className: `flex min-h-screen flex-col items-center justify-between p-24`,
      children: /* @__PURE__ */ jsxs("div", { className: "text-center h-full", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl typography", children: "JOHN FISHER" }),
        /* @__PURE__ */ jsxs("div", { id: "projectsContainer", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "card",
              onClick: () => goTo("https://jgf5013.github.io/virus-visualization"),
              onKeyDown: () => goTo("https://jgf5013.github.io/virus-visualization"),
              role: "button",
              tabIndex: 0,
              children: /* @__PURE__ */ jsxs("div", { className: "m-4", children: [
                /* @__PURE__ */ jsx("div", { className: "img-container", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "cardImg",
                    alt: "Virus",
                    src: "images/bug.png",
                    title: "Virus"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h5", { children: "Virus Simulation" }),
                  /* @__PURE__ */ jsx("p", { className: "typography", children: "Why do I need to stay inside??" })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            PortfolioCard,
            {
              index: 1,
              link: "https://jgf5013.github.io/planet-mapper",
              img: {
                src: "images/planet-mapper.png",
                title: "Orbit",
                alt: "Image of planetary orbit"
              },
              title: "Planet Mapper",
              subtext: "Space tells matter how to move; matter tells space how to curve"
            }
          ),
          /* @__PURE__ */ jsx(
            PortfolioCard,
            {
              index: 2,
              link: "https://jgf5013.github.io/angular-mono-repo",
              img: {
                src: "images/staff.png",
                title: "Staff",
                alt: "Image of staff"
              },
              title: "Staff Tools",
              subtext: "Hey John, I'm seeing something weird..."
            }
          ),
          /* @__PURE__ */ jsx(
            PortfolioCard,
            {
              index: 3,
              link: "https://drive.google.com/file/d/1cAXXuzHCYjsgwNCbudpEZXg8P9i6GA_9/view",
              img: {
                src: "images/add.png",
                title: "Add",
                alt: "Image of add button for requesting new projects"
              },
              title: "Request",
              subtext: "Check out my resume. Send me an email If you're interested in\n            connecting or would like to see me build something\n            interesting!",
              isAdd: true
            }
          )
        ] })
      ] })
    }
  );
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-C0iEqfXD.js", "imports": ["/assets/jsx-runtime-CBzomPNv.js", "/assets/components-Dw5WxyuT.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-skZyAbhb.js", "imports": ["/assets/jsx-runtime-CBzomPNv.js", "/assets/components-Dw5WxyuT.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-gf7vrLDF.js", "imports": ["/assets/jsx-runtime-CBzomPNv.js"], "css": [] } }, "url": "/assets/manifest-4a8699a3.js", "version": "4a8699a3" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false, "unstable_fogOfWar": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
