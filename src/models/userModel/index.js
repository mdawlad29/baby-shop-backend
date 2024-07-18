import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: string,
      required: [true, "Name filed is required"],
    },
    email: {
      type: String,
      required: [true, "user email is required!"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (val) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
        },
        message: "Please enter your valid email",
      },
    },
    phone: {
      type: String,
      required: [true, "Phone field is require"],
    },
    password: {
      type: String,
      required: [true, "Password filed is require."],
      minLength: [6, "Password must be 6 character"],
      set: (val) => bcrypt.hashSync(val, bcrypt.genSaltSync(10)),
    },
    isAdmin: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = model("users", userSchema);
export default userModel;
