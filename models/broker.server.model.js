/**
 * Created by Ronnie on 10-12-2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    // Custom error text..
    'Select a valid member name.'];

var requiredStringValidator = [
    function(val){
        var testVal = val.trim();
        return (testVal.length > 0)
    },
    // Custom error text..
    '{PATH} cannot be empty' ];

var brokerSchema = new Schema ({
    memberName: {
        type: String,
        required: true,
        validate: memberNameValidator},
    project:  {
        type: String,
        required: true,
        validate: requiredStringValidator},
    workYesterday:  {
        type: String,
        required: true,
        validate: requiredStringValidator},
    workToday:  {
        type: String,
        required: true,
        validate: requiredStringValidator},
    impediment:  {
        type: String,
        required: false,
        default: 'none'},
    createdOn: { type: String, default: Date.now }
});

// Export Model..
module.exports = mongoose.model('Broker', brokerSchema);
