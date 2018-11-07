let config = {
	//cookieParserSecret: process.env.COOKIE_PARSER_SECRET,
    //JWTsecret: process.env.JWT_SECRET,
    nodemailerEmail: process.env.NODE_MAILER_EMAIL,
    nodemailerPw: process.env.NODE_MAILER_PW,
    smtp: process.env.SMTP,
    mongoUri: process.env.MONGO_URI,
    mongoUsername: process.env.MONGO_USERNAME,
    mongoPw: process.env.MONGO_PW
}

module.exports = config