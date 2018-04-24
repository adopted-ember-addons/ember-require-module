import require from 'require';

export default function requireModule(module, exportName = 'default') {
  if (require.has(module)) {
    return require(module)[exportName];
  }
}
