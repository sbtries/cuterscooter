const { AsyncRouter } = require("express-async-router");
const Person = require("../models/Sticker");

const router = AsyncRouter();

//
// CRUD routes
//

// List
router.get("/", async (req, res) => {
  const sticker = await Person.find();

  res.send(sticker);
});

// Create
router.post("/", async (req, res) => {
  const sticker = new Sticker(req.body);

  try {
    await sticker.save();
  } catch(e) {
    return res.sendStatus(500);
  }

  res.status(201).send(sticker);
});

// Retrieve
router.get("/:_id", async (req, res) => {
  const sticker = await Sticker.findOne({_id: req.params._id});

  // Short circuit the request response cycle!
  if(!sticker) return res.sendStatus(404);

  res.send(sticker);
});

// Update
router.patch("/:_id", async (req, res) => {
  const sticker = await Sticker.findOne({_id: req.params._id});

  // Short circuit the request response cycle!
  if(!sticker) return res.sendStatus(404);

  sticker.set(req.body);
  try {
    await sticker.save();
  } catch(e) {
    return res.sendStatus(500);
  }

  res.send(sticker);
});

// Delete
router.delete("/:_id", async (req, res) => {
  const sticker = await Sticker.findOne({_id: req.params._id});

  // Short circuit the request response cycle!
  if(!sticker) return res.sendStatus(404);

  await sticker.remove();

  res.send(sticker);
});

module.exports = router;