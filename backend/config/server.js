module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "81261068169959a824d1f8e72f666336"),
    },
  },
});
