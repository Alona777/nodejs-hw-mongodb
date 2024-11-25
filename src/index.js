import { setupServer } from "./server.js";
import { initMongoDB } from "./db/initMongoDB.js";



// setupServer();

const bootstrap = async () => {
    await initMongoDB();
    setupServer();
  };
  
  bootstrap();
  