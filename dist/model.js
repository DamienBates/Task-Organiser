"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const TasksSchema = new Schema({
    task: {
        type: String
    },
    comments: {
        type: String
    },
    priority: {
        type: String
    },
});
const TasksModel = mongoose_1.default.model("Tasks", TasksSchema);
exports.default = TasksModel;
