import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import crypto from "crypto"




const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    reputation: {
        type: Number,
        default: 0
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    verificationToken: {
        type: String
    },

    verificationTokenExpiry: {
        type: Date
    }

}, {
    timestamps: true
});

// HASH PASSWORD BEFORE SAVING
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return
    this.password = await bcrypt.hash(this.password, 10)
})


// CHECK PASSWORD
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}


// ACCESS TOKEN
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username
        },
        process.env.JWT_ACCESS_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        } 
    )
}


// REFRESH TOKEN
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


// TEMP TOKEN
userSchema.methods.generateTemporaryToken = function () {
    const unHashedToken = crypto.randomBytes(20).toString("hex")
    const hashedToken = crypto
        .createHash("sha256")
        .update(unHashedToken)
        .digest("hex")
    const tokenExpiry = Date.now() + (20 * 60 * 1000)
    return { unHashedToken, hashedToken, tokenExpiry }
}


export default mongoose.models.User ||
mongoose.model("User", UserSchema);