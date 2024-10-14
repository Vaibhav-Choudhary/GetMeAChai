import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Uncomment the other providers as needed
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
};

// NextAuth API route
const authHandler = NextAuth(authOptions);

// Handling requests based on HTTP methods
export async function GET(req, res) {
  return authHandler(req, res);
}

export async function POST(req, res) {
  return authHandler(req, res);
}
