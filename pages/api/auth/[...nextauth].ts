import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { prisma } from "@/lib/db"

export const authOptions: NextAuthOptions = {
  // pages:{
  //   signIn: '/login',
  // },
//   adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    //   clientId:"675244608478-r5lakcn6ut28ametjlbbmn5rsrcev47f.apps.googleusercontent.com",
    //   clientSecret:"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", 
    }),
  ],
  session: {
    strategy: 'jwt' 
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token }) {
      return token
    }
  }
}
export default NextAuth(authOptions)
// export default NextAuth({
//   providers: [
//       GoogleProvider({
//       clientId: "675244608478-r5lakcn6ut28ametjlbbmn5rsrcev47f.apps.googleusercontent.com",
//       clientSecret: "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",
//       })
//   ]
// })
