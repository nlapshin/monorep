import { config } from '../../config';
import { parseScopeOption } from '../../options'

export function addPackageHandler(dependency: string, options: { scope?: string }): void {
  const scope = parseScopeOption(options.scope);
  const { packages } = config();

  console.log(dependency, scope, packages);
}