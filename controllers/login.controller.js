import rUser from "../models/Register.js";
import bcrypt from "bcryptjs"; // For password hashing (recommended)

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await rUser.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }

   
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }


    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// import logUser from "../models/Login.js";
// // import bcrypt from "bcryptjs";

// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//     if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required" });
//   }

//   try {
//     const user = await logUser.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: "User does not exist" });
//     }

  
//     // if (user.password !== password) {
//     //   return res.status(401).json({ message: "Invalid email or password" });
//     // }

//      const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     res.status(200).json({
//       message: "Login successful",
//       user: {
//         id: user._id,
//         // password: user.password,
//         email: user.email
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };