const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const User = require("../models/userModels");

router.post("/login", async(req, res) => {
    try{
        email = 'example@gmail.com'
        password = 'password'
        displayName = 'koozzi'

        const user = await User.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, user.password);

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.status(200).json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
            },
        });
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
})

router.post("/register", async(req, res) => {
    try {
        email = 'example@gmail.com'
        password = 'password'
        displayName = 'koozzi'

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: passwordHash,
            displayName
        });

        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;