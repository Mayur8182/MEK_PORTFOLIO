#!/bin/bash
npm install
cd client && npm install && npm run build
cd ../server && npm install
cd ..
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist/server
