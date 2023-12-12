import bcrypt from "bcrypt";

export async function hashPassword(plainTextPassword) {
    const saltRounds = 14
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)
    
    return hashedPassword
}

export async function comparePassword(plainTextPassword, hashedPassword) {
    const match = await bcrypt.compare(plainTextPassword, hashedPassword)
    
    return match
}
