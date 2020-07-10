"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = require("./config/app");
const PORT = process.env.PORT;
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
