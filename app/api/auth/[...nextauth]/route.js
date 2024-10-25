import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connectDB from "@/dB/connectDB";

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github" ) {
        // Connect to DB
        await connectDB();
  
        // Check if the user already exists in the database by email
        const currentUser = await User.findOne({ email: user.email });
  
        if (!currentUser) {
          // Create a new user with a unique username
          const username = "_" + user.email.split('@')[0];
          const newUser = await User.create({
            email: user.email,
            username: username,
          });
          user.name = newUser.username;
        } else {
          // If user exists, return the current username
          user.name = currentUser.username;
        }
      }
      return true;
    }
  },

  async session({ session, user, token }) {
    const dbUser = await User.findOne({ username: (account.provider == "github")? "_" + user.email.split('@')[0] : user.email.split('@')[0]  });
    session.user.name = dbUser.username;
    return session
  },
})

export { authoptions as GET, authoptions as POST }