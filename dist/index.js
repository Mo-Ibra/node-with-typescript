"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_routes_1 = __importDefault(require("./routes/app.routes"));
const connect_1 = __importDefault(require("./connect"));
const app = (0, express_1.default)();
const PORT = 8000;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use(app_routes_1.default);
connect_1.default.query('SELECT 1 + 1 AS solution', function (err, results, fields) {
    if (err)
        throw err;
    console.log(`The Solution is ${results[0].solution}`);
    console.log(results);
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
