import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
  loanTitle:  String, // String is shorthand for {type: String}
  loanOwner: String,
  loanDescription:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean
});