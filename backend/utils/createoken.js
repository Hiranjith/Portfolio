import jwt from "jsonwebtoken"


const generateToken = async(res, userId) => {
    const secret = process.env.JWT_SECRET_KEY || "default_jwt_secret_key_123_abc"
    const token = jwt.sign({ userId }, secret, {
        expiresIn: '3d'
    })

    res.cookie('jwt', token, {
        httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 30*24*60*60*1000,
    })

    return token
}

export default generateToken