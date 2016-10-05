/**
 * Created by k.wisniewski on 05.10.2016.
 */


var fs = require('fs');
var globalObjects = {
    promise : require('promise'),
    ejs : require('ejs'),
    logger : function logger(config){
        fs.writeFile(config.path + config.filename, config.error ,function(){
                console.log("Logged Error In File: " + config.path + config.filename);
        }) ;
    },
    errorPat: {
        msg : "Bad Request",
        code : 400
    }
};

/**
 * Core Points of application
 */

"use strict";


