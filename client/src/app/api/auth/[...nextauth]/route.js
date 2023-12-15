import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const refreshTokenAPICall = async (token) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/auth/refresh";

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "refresh-token": token.refreshToken,
        },
    });

    if (res.ok) {
        const data = res.json();
        return {
            ...token,
            error: null,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            expiresIn: (Date.now() + (parseInt(data.expires_in) * 1000) - 2000),
        }
    } else {
        return {error: "RefreshTokenTokenError"}
    }
}

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                const url = process.env.NEXT_PUBLIC_API_URL + "/api/auth/login";
                const formData = new URLSearchParams();

                formData.append("session_key", credentials.session_key);
                formData.append("session_password", credentials.session_password);

                try {
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {"Accept": "application/json"},
                        body: formData,
                    });


                    if (response.ok) {
                        const data = await response.json();
                        return { status: 200, message: "Success", accessToken: data };
                    }

                    const errorData = await response.json();
                    return { status: response.status, message: errorData.error };
                } catch (error) {
                    return { status: 500, error: error.message };
                };
            }
        })
    ],

    callbacks: {
        async session({ session, token }){
            session.accessToken = token.accessToken;

            if (session?.accessToken ?? false) {
                const url = process.env.NEXT_PUBLIC_API_URL + "/users/me";

                const userRes = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token.accessToken}`,
                    },
                });

                if (userRes.ok) {
                    const userDetails = await userRes.json();

                    session.user = userDetails;
                    session.user.name = `${userDetails.first_name} ${userDetails.last_name}`;
                }
            }

            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.expiresIn = (Date.now() + (parseInt(user.expires_in) * 1000) - 2000);
            }
            if (Date.now() < token.expiresIn) {
                return token;
            }
            return await refreshTokenAPICall(token);
        }
    },

    pages: {
        signIn: "/auth/login",
        newUser: "/auth/register"
    },

    secret: process.env.ACCESS_TOKEN_SECRET
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};