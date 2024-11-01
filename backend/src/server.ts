import app from './app';
import { config } from './config';

const PORT = config.app.port || 5000;
console.log("PORT: ", process.env.PORT);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
