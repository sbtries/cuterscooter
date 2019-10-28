const chai = require("chai");
const { app } = require("../src/server");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const Sticker = require("../src/models/Sticker");

const { ObjectId } = mongoose.Types;
const { expect } = chai;

describe("src/controllers/Sticker.route.js", () => {

  after(async function() {
    await Sticker.deleteMany({})
  });

  it("GET /post: should show stickers", async function() {
    const res = await chai
      .request(app)
      .get("/stickers");

    expect(res.status).to.eq(200);
    expect(res.body.length).to.eq(1);
  });

  it("POST /post: should create a sticker", async function() {
    const res = await createSticker({
        name: 'Test',
        price: 99
    });

    expect(res.status).to.eq(201);
    expect(res.body.name).to.eq("Test");
  });


  it("GET /post/:_id: should show a sticker", async function() {
    const res = await chai
      .request(app)
      .get("/sticker/" + this.sticker._id)

    expect(res.status).to.eq(200);
    expect(res.body.name).to.eq("Test");
  });

  it("GET /sticker/:_id: should 404", async function() {
    const res = await chai
      .request(app)
      .get("/sticker/" + new ObjectId())

    expect(res.status).to.eq(404);
  });

  it("PATCH /sticker/:_id: should update", async function() {
    const res = await chai
      .request(app)
      .patch("/sticker/" + this.post._id)
      .send({
        name: "More Test"
      })
    
    expect(res.status).to.eq(200);
    expect(res.body.name).to.eq("More Test");
  });

  it("PATCH /post/:_id: should 404", async function() {
    const res = await chai
      .request(app)
      .patch("/sticker/" + new ObjectId())
      .send({
        name: "More Fun Test"
      })
    
    expect(res.status).to.eq(404);
  });

  it("DELETE /sticker/:_id: should delete", async function() {
    const res = await chai
      .request(app)
      .delete("/sticker/" + this.sticker._id)

    expect(res.status).to.eq(200);
    expect(res.body.name).to.eq("More Test");
  });

  it("DELETE /post/:_id: 404", async function() {
    const res = await chai
      .request(app)
      .delete("/sticker/" + new ObjectId())

    expect(res.status).to.eq(404);
  });

});