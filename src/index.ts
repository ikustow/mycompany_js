import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import adminRouter from "./presentaion-layer/routes/admin.route";
import employeeRouter from "./presentaion-layer/routes/employee.route";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use('/api',adminRouter)
app.use('/api',employeeRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});