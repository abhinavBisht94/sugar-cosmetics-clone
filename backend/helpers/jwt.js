const jwt = require("jsonwebtoken");
const createError = require("http-errors");

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {
        // name: "your ",
        // exp: new Date(),
        // iss: "",
        //   aud: userid,
        // userId,
      };
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "15s",
        // issuer: "google.com",
        audience: userId,
      };

      jwt.sign({ userId }, secret, options, (error, token) => {
        if (error) return reject(createError.InternalServerError());
        resolve(token);
      });
    });
  },

  verifyAccessToken: (req, res, next) => {
    if (!req.headers["authorization"]) return next(createError.Unauthorized());
    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
      if (error) {
        if (error.name === "JsonWebTokenError") {
          return next(create.Unauthorized());
        } else {
          return next(create.Unauthorized(error.message));
        }
      }
      req.payload = payload;
      next();
    });
  },

  signRefreshToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {
        // name: "your ",
        // exp: new Date(),
        // iss: "",
        //   aud: userid,
        // userId,
      };
      const secret = process.env.REFRESH_TOKEN_SECRET;
      const options = {
        expiresIn: "1y",
        // issuer: "google.com",
        audience: userId,
      };

      jwt.sign({ userId }, secret, options, (error, token) => {
        if (error) return reject(createError.InternalServerError());
        resolve(token);
      });
    });
  },

  verifyRefreshToken: (refreshToken) => {
    return new Promise((res, rej) => {
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (error, payload) => {
          if (error) return rej(createError.Unauthorized());
          const userId = payload.aud;

          res(userId);
        }
      );
    });
  },
};
