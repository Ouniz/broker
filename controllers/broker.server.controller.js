/**
 * Created by Ronnie on 10-12-2015.
 */
var Broker = require('../models/broker.server.model.js');

exports.list = function(reg, res){
    var query = Broker.find();

    query.sort({ createdOn: 'desc'}).limit(12).exec(function(err, results){
           res.render('index', {title: 'Broker - List', notes: results})
        });

}

exports.filterByMember = function(reg, res){
    var query = Broker.find();
    var filter = reg.body.memberName;

    query.sort({ createdOn: 'desc'})

    if(filter.length > 0){
        query.where({ memberName: filter })
    }

    query.exec(function(err, results){
        res.render('index', { title: 'Broker - List', notes: results});
    });
};


exports.create = function(reg, res){
    var entry = new Broker({
        memberName: reg.body.memberName,
        project: reg.body.project,
        workYesterday: reg.body.workYesterday,
        workToday: reg.body.workToday,
        impediment: reg.body.impediment,
    });

    entry.save(function (err){
        if (err){
            var errMsg = "Sorry, there was an error saving you'r work progression." + err.toString();
            res.render('newnote', {title: 'Broker - New Note (error)', message: errMsg});
        }
        else{
            console.log('Broker Work progression was saved!');
            // Redirect to the home page to display list of notes...
            res.redirect(301, '/');
        }
    });

};

exports.getNote = function(reg, res){
    res.render('newnote',{ title: 'Broker - New Note'});
}

