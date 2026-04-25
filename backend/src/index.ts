
import express from 'express';
import type { Response, Request } from 'express';
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Welcome to the Temple Yatra API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});