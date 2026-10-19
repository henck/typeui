// Writes dist/package.json for publishing the contents of /dist as the package root.
// - Strips the "dist/" prefix from the entry points.
// - Generates an "exports" map covering every module in dist, so that all
//   extensionless deep imports (e.g. "@independent-software/typeui/controls/Button")
//   keep working, now also under Node16/NodeNext module resolution.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

for (const field of ['main', 'module', 'types']) {
  pkg[field] = pkg[field].replace(/^(\.\/)?dist\//, './');
}

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);

const entry = (base) => {
  const types = fs.existsSync(path.join(dist, base + '.d.ts')) ? { types: './' + base + '.d.ts' } : {};
  return { ...types, default: './' + base + '.js' };
};

const exportMap = { '.': entry('index') };
const modules = walk(dist)
  .map(f => path.relative(dist, f).split(path.sep).join('/'))
  .filter(f => f.endsWith('.js'))
  .map(f => f.slice(0, -'.js'.length))
  .sort();
for (const base of modules) {
  if (base === 'index') continue;
  if (base.endsWith('/index')) {
    exportMap['./' + base.slice(0, -'/index'.length)] = entry(base);
  }
  exportMap['./' + base] = entry(base);
}
// Any file by its full path, e.g. "./spritemap.svg" or "./controls/Button/index.js":
exportMap['./*'] = './*';

pkg.exports = exportMap;
fs.writeFileSync(path.join(dist, 'package.json'), JSON.stringify(pkg, null, 2) + '\n');
console.log(`Wrote dist/package.json with ${Object.keys(exportMap).length} export entries`);
