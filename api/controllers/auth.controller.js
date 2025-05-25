const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const duplicateUser = await User.findOne({ email });
    if (duplicateUser) {
      return res.status(409).json({
        message: "User with this email already exists. Please login.",
        statusCode: 409,
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    console.log("User created successfully:", newUser);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        email: newUser.email,
        id: newUser._id,
      },
      statusCode: 201,
      success: true,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
