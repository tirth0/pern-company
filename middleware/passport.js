import passport from 'passport';
import passportJwt from 'passport-jwt'
import {Company, User} from '../models/Models'
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

passport.use('company',
    new StrategyJwt({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }, async (jwt_payload, done) => {
        try {
            const user = await Company.findOne({id: jwt_payload.id});
            if (!user) {
                return done(null, false);
            }
            return done(null, user);
        } catch (err) {
            return done(err, false);
        }
    })
)

passport.use('user', 
    new StrategyJwt({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }, async (jwt_payload, done) => {
        try {
            const user = await User.findOne({id: jwt_payload.id});
            if (!user) {
                return done(null, false);
            }
            return done(null, user);
        } catch (err) {
            return done(err, false);
        }
    })
)