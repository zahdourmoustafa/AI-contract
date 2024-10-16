import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user.model';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      res.redirect(`${process.env.CLIENT_URL}/dashboard`);
    }
  );

  router.get("/current/user", (req, res) => { 
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(401).json('You are not authenticated');
    }

  })

export default router;
