const { Schema, model } = require("mongoose");
const { validateEmail } = require("../utils/validator");

const reactionSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
      max: 280,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { id: true }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max: 280,
      min: 1,
    },
    reactions: [reactionSchema],
  },
  {
    timestamps: true,
    id: true,
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
