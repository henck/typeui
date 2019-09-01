rem Publish package to NPM, eliminating this /dist directory (publish only its contents)
rem This is done by copying package.json and README.md to dist, then editing package.json
rem to remove the /dist prefix.
copy package.json dist
copy README.md dist
node node_modules\replace-in-file\bin\cli.js /dist/g "" dist/package.json --isRegex

