rem Publish package to NPM, eliminating this /dist directory (publish only its contents)
rem This is done by copying README.md to dist, then writing a package.json into dist
rem whose entry points and exports map are relative to dist.
copy README.md dist
del dist\main.js
node scripts\package-dist.js

