import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Tickets = new Schema({
    title: { type: String, lowercase: true, max: 30 },
    priority: { type: String },
    reason: { type: String },
    description: { type: String, max: 300 }

}, { timestamps: true, versionKey: false });