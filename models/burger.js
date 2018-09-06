var orm = require("../config/orm.js");

var burgers = {

    selectAll:function(cb){
        orm.selectAll("burgers",function(result){
            cb(result)
        });
    },
    insertOne:function(cols,vals,cb){
        orm.insertOne("burgers",cols,vals, function(result){
            cb(result);
        })
    },

    updateOne: function(burgerId, cb){
        orm.updateOne(burgerId,function(result){
            cb(result);
        });

    }


}


module.exports = burgers;

