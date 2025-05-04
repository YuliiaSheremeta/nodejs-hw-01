import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const PATH_DB = (() => {
    const filename = fileURLToPath(import.meta.url);
    const dirname = path.dirname(filename);
   return path.join(dirname, '..', 'db', 'db.json');

})();
