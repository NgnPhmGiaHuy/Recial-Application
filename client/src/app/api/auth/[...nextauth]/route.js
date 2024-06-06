import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { fetchGoogleData } from "@/utils";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/",
        signOut: "/auth/login",
    },
    callbacks: {
        async signIn({ account }) {
            if (account.provider === "google") {
                try {
                    const response = await fetchGoogleData(account);

                    if (response && response.accessToken && response.refreshToken) {
                        return true;
                    } else {
                        throw new Error("Access token or refresh token missing in response");
                    }
                } catch (error) {
                    throw  error;
                }
            }
            return true;
        },
    },
    secret: process.env.ACCESS_TOKEN_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };