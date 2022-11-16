const mongoose = require("mongoose");//ArviS#0011
//ArviS#0011
const arvis_guard = mongoose.Schema({//ArviS#0011
    banlı: Array,//ArviS#0011
    owner: Array,//ArviS#0011
    bot: Array//ArviS#0011
});//ArviS#0011
//ArviS#0011
module.exports = mongoose.model("arvis_guard", arvis_guard);//ArviS#0011










//ArviS#0011