import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secretKey = "abcdefghijklmnopqrstuvwxyz";

export const signup = async (req,res) => {
    
    // console.log(req.body);
    const {username, email, password} = req.body;
    if(!username || !email || !password)
        return res.status(402).json({message : "fields are incomplete" });
    // const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password});
    try {
        await newUser.save();
        res.json({message : "User saved successfully!"});
    } catch (error) {
        res.json({message : "Email already exists!"});
    }
}

export const login = async (req, res) => {

    const { email, password } = req.body;
    try {
        if(!email || !password) 
            return res.status(401).json({message : "fields incomplete"});
        const validUser = await User.findOne({ email: email });
        // Check if user exists
        if (!validUser) {
            console.log("User not found!");  // Log if user is not found
            return res.status(401).json({ message: "User not found!" });
        }
        // console.log(validUser);
        // Check if password matches
        const originalPassword = validUser.password;
        if (password !== originalPassword) {
            console.log("Password mismatch");  // Log if password mismatch
            return res.status(401).json({ message: "Password mismatch" });
        }
        // Create a JWT token
        const token = jwt.sign({ id: validUser._id }, secretKey, { expiresIn: '1h' });

        // a token is generated with assignment of unique id;
        // we need to store the token in cookie
        const userObject = validUser.toObject();
         const {password: temp, ...rest}  = userObject; 
        res.cookie('access_token', token, {httpOnly : true}).status(200).json(rest) // 3rd parameter provide prevention for 3rd party apps to modify cookie.

    } catch (error) {
        console.log(error);
        res.json("Something went wrong!");
    }

}