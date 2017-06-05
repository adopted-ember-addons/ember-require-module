/* globals requirejs, require */

export default function requireModule(module, exportName = 'default') {
  let rjs = requirejs;

  if (
    (rjs.has && rjs.has(module)) ||
    (!rjs.has && (rjs.entries[module] || rjs.entries[`${module}/index`]))
  ) {
    return require(module)[exportName];
  }
}
