const mongoose = require("mongoose")

const BlacklistTokenSchema = new mongoose.Schema({
    token:{
        type: String,
        required : [true, "token is required"]
    },
     timestamp: {
        type: Date,
        required: true,
        default: Date.now
    }


})

const BlacklistTokenModel = mongoose.model("blacklisttokens",BlacklistTokenSchema)

module.exports = BlacklistTokenModel