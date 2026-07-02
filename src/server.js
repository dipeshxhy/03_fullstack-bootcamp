import 'dotenv/config';

import http from 'http';
import app from './app.js';

const server = http.createServer(app);

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port} in ${process.env.NODE_ENV} mode`);
});
