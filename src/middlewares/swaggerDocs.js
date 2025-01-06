import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../docs/swagger.json' assert { type: 'json' };

export const swaggerDocs = () => {
  return swaggerUi.serveFiles(
    swaggerDocument,
    {},
    swaggerUi.setup(swaggerDocument),
  );
};
