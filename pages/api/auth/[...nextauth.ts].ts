// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
 
  ],
})