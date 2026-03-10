import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

// to hash password before saving or bcrypt password
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return ;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

//   next();
});

// password comparsion method adding to userSchema
userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
