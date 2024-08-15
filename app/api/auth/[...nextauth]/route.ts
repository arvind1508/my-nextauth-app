// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

// Dummy users data (Replace with database calls in production)
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "$2a$12$IgOrxaus3i3TPHk1gB0JGOeHwiVZai4pXJes9BZmCOswkcCZTEea.", // Password hash for "password"
  },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        // Find user in your database or use dummy data for testing
        const user = users.find((user) => user.email === credentials.email);

        if (user && (await compare(credentials.password, user.password))) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Path to your custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
