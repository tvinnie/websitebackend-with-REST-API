'use strict';

const sharp = require('sharp');

module.exports = function(PostImage) {

    PostImage.upload = function(ctx, options, access_token, post_id, cb){
        
    }
    // configure the remote route

    PostImage.remoteMethod(
        'upload',
        {
            description: 'Uploads a file',
            accepts: [
                {arg: 'ctx',type: 'object', http: { source: 'context'}},
                {arg: 'options', type: 'object', http: {source: 'query'}},
                {arg: 'access_token', type:'string'},
                {arg:'post_id', type:'string'}
            ],
            returns: {
                arg: 'fileObject', type: 'object', root: true,
            },
            http: { verb: 'post'}
        }
    )

};
