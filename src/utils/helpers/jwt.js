import { SignJWT, jwtVerify } from "jose";

const secret = "my super secret key that is at least 32 characters long";
const key = new TextEncoder().encode(secret);

export const encryptJWT = async (payload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
};

export const decryptJWT = async (token) => {
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
};
