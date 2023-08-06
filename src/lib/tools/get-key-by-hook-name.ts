export function getKeyByHookName(hookName: string) {
  return hookName
    .replace(/^use/, '')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase();
}
