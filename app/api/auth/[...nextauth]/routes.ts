import NextAuth from 'next-auth';

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [],
});

export { handler as GET, handler as POST };
