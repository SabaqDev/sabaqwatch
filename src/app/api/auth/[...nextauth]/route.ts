import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db"
import bcrypt from "bcrypt"

const authOptions = { 
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Usuario", type: "text", placeholder: "nombre apellido" },
                password: { label: "Password", type: "password",placeholder: "**********" }
            },
        async authorize(credentials, req) {
            console.log(credentials)
            const userFound = await db.users.findUnique({
                where: { name: credentials.name }
            })
            if (!userFound) return null
            console.log(userFound)
            const matchPassword = await bcrypt.compare(credentials.password, userFound.password)
            if (!matchPassword) return null
            console.log(userFound)

            return {
                id: userFound.id,
                name: userFound.name,
                createAt: userFound.createAt
            }
        }
        })
    ]
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}