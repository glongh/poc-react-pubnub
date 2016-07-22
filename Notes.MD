Some notes:
===========

var p = PUBNUB.init({
        uuid: 'user-123',
        publish_key: 'a-valid-key',
        subscribe_key: 'a-valid-key',
        heartbeat: 15,
        heartbeat_interval: 5
    })
p.set_uuid(123);

p.channel_group_add_channel({
        channel_group: `cg-1234-friends`,
        channel: `ch-1234-present`
    })

p.subscribe({
        channel: `ch-1234-present`,
        state    : { 
	        "id" : 'User L',
	        "slug": 'user-l',
	        "image": 'http://www.fillmurray.com/153/152'
	    },
        message: function(m,a,b,c) {
            console.log("STATUS: ", m,a,b,c)
        }
    })

p.state({
    channel  : "ch-1234-present",
    state    : { 
        "id" : 'User L',
        "slug": 'user-l',
        "image": 'http://www.fillmurray.com/153/152'
    },
    callback : function(m){
        console.log(m)
    },
    error    : function(m){
        console.log(m)
    }
});


p.subscribe({
        channel_group: `cg-1234-friends-pnpres`,
        message: function(m,a,b,c) {
            console.log("FRIEND PRESENCE: ", m,a,b,c)
        }
    })

p.channel_group_add_channel({
        channel_group: `cg-123-friends`,
        channel: `ch-1234-present`,
        callback: function(m) {
            console.log("CG-Added: ", m);
        }
    });

 p.channel_group_add_channel({
        channel_group: `cg-1234-friends`,
        channel: `ch-123-present`,
        callback: function(m) {
            console.log("CG-Added: ", m);
        }
    });


p.here_now({
        channel_group: `cg-123-friends`,
        callback: function(m, a) {
            console.log("ONLINE NOW: ", m)
           
        }
    });

 p.channel_group_list_channels({
        channel_group: `cg-123-friends`,
        callback: function(m,a,b,c) {
            console.log("STATUS: ", m,a,b,c)
        }
    });

 p.unsubscribe({
        channel: `ch-123-present`,
        message: function(m,a,b,c) {
            console.log("STATUS: ", m,a,b,c)
        }
    })

 p.state({
    channel  : "ch-1234-present",
    uuid     : "123",
    callback : function(m){
        console.log(m)
    },
    error    : function(m){
        console.log(m)
    }
})

 p.here_now({
    channel : 'ch-1234-present',
    state : true,
    callback : function(m){
        console.log(m)
    }
});
