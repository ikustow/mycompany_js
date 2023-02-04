import express, { Express, Request, Response } from 'express';
var cors = require('cors')
import dotenv from 'dotenv';
import adminRouter from "./presentaion-layer/routes/admin.route";
import employeeRouter from "./presentaion-layer/routes/employee.route";
import authRouter from "./presentaion-layer/routes/auth.route";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use(express.urlencoded());
app.use('/api',adminRouter)
app.use('/api',employeeRouter)
app.use('/api',authRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});