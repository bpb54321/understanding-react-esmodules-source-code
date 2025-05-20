# Understanding React - ES Modules Source Code

This repo follows along the course [Understanding React](https://understandingreact.com/) by Tony Alicea.

## Serving the Application
As suggested by Tony Alicea in the course, I use the [Live Server VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to serve the `index.html` file at the root of the project, which allows me to run the application in my browser locally.

## React Source Code

In order to provide a better experience when logging and debugging in the browser, the React source code was processed in the following way.

1. The necessary packages needed to run a client-side React application in the browser were copied from the React source repo to this repo.
1. The npm package `flow-remove-types` is run against the code in `packages` to remove Flow type annotations and copy the source code, stripped of Flow types, to the `dist` folder.
1. esbuild is run to bundle all the imported partials into a single bundle.
    1. This is necessary because the browser ES Module resolver requires the '.js' extension for every JS module, whereas the React source code uses the common Node.js shortcut of omitting the '.js' extension for imported modules.
    1. esbuild is able to resolve imports without the '.js' extension.
    1. The `NODE_PATH` variable is set to the `dist` folder for when a JS module uses a global import location / import alias rather than a relative path import.
    1. Source maps are enabled in the esbuild bundle so that the individual Javascript modules are visible when stepping through the code with the DevTools debugger.
    1. Certain manually adjustments are made, such as pasting in the contents of `packages/react-reconciler/src/forks/ReactFiberConfig.dom.js` into the file `packages/react-reconciler/src/ReactFiberConfig.js`, since this is an automated shim step that the actual React build pipeline does when React is built from its source. Since we are not using Rollup and the build scripts from the React repo, this was a quick way to handle this problem.

## Justification
In my opinion, this makes stepping through the React source code as we are exploring different parts of it in the source code the most readable and easiest to understand.

I tried using the React distribution files, but there were too many instances where functions would be inlined and it would be hard to read and understand. Same thing for running the Vite dev server with source maps enabled for the React source code...the source code was transfered to such an extent that it was hard to read and understand the source code.
