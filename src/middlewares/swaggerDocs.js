import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';

// Используем require для импорта JSON
const require = createRequire(import.meta.url);
const swaggerDocument = require('../../docs/swagger.json');

export const swaggerDocs = () => {
  return swaggerUi.serveFiles(
    swaggerDocument,
    {},
    swaggerUi.setup(swaggerDocument)
  );
};
