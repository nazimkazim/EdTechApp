const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  occupation: { type: String },
  city: { type: String },
  country: { type: String },
  age: { type: Number },
  bio: { type: String },
  company: { type: String },
  status: { type: String, required: true },
  dialogueApp: [
    {
      speaker: {
        type: Number,
        required: true
      },
      firstLanguage: {
        type: String,
        required: true
      },
      targetLanguage: {
        type: String,
        required: true
      },
      mainText: {
        type: String,
        required: true
      },
      promptText: {
        type: String,
        required: true
      },
      voiceAudio: { mime: String, bin: Buffer },
      firstLanguageTip: {
        type: String
      },
      targetLanguageTip: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedIn: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: { type: Date, default: Date.now }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
