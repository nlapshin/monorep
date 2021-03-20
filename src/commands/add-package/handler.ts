import { parseScopeOption } from '../../options'

export function addPackageHandler(dependency: string, options: { scope?: string }): void {
  const scope = parseScopeOption(options.scope);

  console.log(dependency, scope);
}