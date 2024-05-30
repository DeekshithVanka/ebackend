
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');



// route for user registration
const register= async (req, res) => {
    const { username,email , password } = req.body;
    try {
        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create the user
        const user = new User({ username,email, password: hashedPassword });
        await user.save();

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ error: 'User registration failed' });
    }
};

// Route for user login
const login= async(req, res) => {
    const body=req.body;
    const  email =body.emailval;
   const password =body.passwordval;
    try {
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'no one' });
        }
           const Hashedpassword=user.password;
        // Compare entered password with hashed password
     
        const isMatch =await bcrypt.compare(password,Hashedpassword);
     
      
       


        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {register,login}