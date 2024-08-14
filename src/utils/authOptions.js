import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful sign in
    async signIn({ profile }) {
      console.log("running function signIn... ");
      // 1. Connect to database
      console.log("Profile", profile);
      await connectDB();
      // 2. Check if user exist
      const userExist = await User.findOne({ email: profile.email });
      // 3. if not, create user

      if (!userExist) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          name: username,
          username,
          image: profile.picture,
        });
      }
      // 4. Return true to allow sign in
      return true;
    },
    // Session callback function that modifies the session object

    async session({ session }) {
      // 1. Get user from database
      const user = await User.findOne({ email: session.user.email });
      console.log("running function session... ", session.user);

      // 2. Assign user id from the session
      session.user.id = user._id.toString();
      // 3. Return session

      return session;
    },
  },
};
/*
Profile {
  iss: 'https://accounts.google.com',
  azp: '367334560401-ekd9l8hupn2q6o5t4tlmi3b6i6gvqaqj.apps.googleusercontent.com',
  aud: '367334560401-ekd9l8hupn2q6o5t4tlmi3b6i6gvqaqj.apps.googleusercontent.com',
  sub: '101971335187043669472',
  email: 'jonel.c.briones@gmail.com',
  email_verified: true,
  at_hash: 'eK-6pCbbxfa1mlxoMMfWyA',
  name: 'Jonel Briones',
  picture: 'https://lh3.googleusercontent.com/a/ACg8ocJc18f-h9chAAZLjarbI1cd2RINFssl-ecjamaRJdlRkgTrNZI=s96-c',
  given_name: 'Jonel',
  family_name: 'Briones',
  iat: 1723538355,
  exp: 1723541955
}
  Profile {
  iss: 'https://accounts.google.com',
  azp: '367334560401-ekd9l8hupn2q6o5t4tlmi3b6i6gvqaqj.apps.googleusercontent.com',
  aud: '367334560401-ekd9l8hupn2q6o5t4tlmi3b6i6gvqaqj.apps.googleusercontent.com',
  sub: '113743524839530549515',
  email: 'ijonel906@gmail.com',
  email_verified: true,
  at_hash: '7m7Krmhx_c3SDJqQOR42Ag',
  name: 'Jonel Briones',
  picture: 'https://lh3.googleusercontent.com/a/ACg8ocIZeZ0anH0bs_tsFDaSe3oV4XEMiJsg2yE-vhj7N2APObOaP3tu=s96-c',
  given_name: 'Jonel',
  family_name: 'Briones',
  iat: 1723538232,
  exp: 1723541832
}


*/
