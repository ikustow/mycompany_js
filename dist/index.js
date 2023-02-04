"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cors = require('cors');
const dotenv_1 = __importDefault(require("dotenv"));
const admin_route_1 = __importDefault(require("./presentaion-layer/routes/admin.route"));
const employee_route_1 = __importDefault(require("./presentaion-layer/routes/employee.route"));
const auth_route_1 = __importDefault(require("./presentaion-layer/routes/auth.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(cors({
    origin: "*",
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use('/api', admin_route_1.default);
app.use('/api', employee_route_1.default);
app.use('/api', auth_route_1.default);
app.get('/', (req, res) => {
    res.send('TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map