const { AsyncRouter } = require("express-async-router");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Sticker = require("../models/Sticker");

const handleValidationErrors = require("../helpers/handleValidationErrors");
const jwtMiddleware = require("../helpers/jwtMiddleware");

const router = AsyncRouter();

// Follow a user
router.post(
  "/follow/:_id", 
  [jwtMiddleware],
  async (req, res) => {
    const followUser = await User.findById(req.params._id);

    if(!followUser) return res.sendStatus(404);

    // Add followers to followingUser
    followUser.followers.push(req.user._id);
    await followUser.save();

    // Add following to current user
    req.user.following.push(followUser._id);
    await req.user.save();

    res.send(req.user);
  }
);

router.get(
  "/following/:_id",
  [jwtMiddleware],
  async (req, res) => {
    console.log(req.user.following[0], req.params._id)
    const isFollowing = req.user.following.find((_id) => _id.equals(req.params._id));

    if(isFollowing) return res.send(200);
    else return res.send(404);
  }
)

module.exports = router;