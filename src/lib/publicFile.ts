import fs from 'node:fs';
import path from 'node:path';

/** True when a file exists under `public/` for the given site path. */
export function publicExists(urlPath: string): boolean {
  const rel = urlPath.replace(/^\//, '');
  return fs.existsSync(path.join(process.cwd(), 'public', rel));
}
