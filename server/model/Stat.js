const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const StatSchema = new Schema({
	id: { type: String },
	currency: { type: String },
	date: { type: Date },
	amount: { type: Number },
	giftable: { type: Boolean },
	on_sale: { type: Boolean },
	image: { type: ObjectId },
	skin: { type: ObjectId },
	hero: { type: ObjectId },
	action: { type: ObjectId },
	boost: { type: ObjectId },
	bundle: { type: ObjectId },
	feed: { type: ObjectId },
});

module.exports = mongoose.model( "Stat", StatSchema );