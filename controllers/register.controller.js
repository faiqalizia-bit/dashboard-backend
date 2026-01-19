import rUser from "../models/Register.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExists = await rUser.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10); 

   
    const user = await rUser.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// import rUser from "../models/Register.js";

// export const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
   
//     const userExists = await rUser.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "Email already registered" });
//     }


//     const user = await rUser.create({
//       name,
//       email,
//       password, 
//     });

//     res.status(201).json({
//       message: "Registration successful",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };