(function() {
    var OriginalWebSocket = window.WebSocket;
    window.WebSocket = function(url, protocols) {
        if (typeof url === 'string' && url.indexOf('iri.herokuapp.com') !== -1) {
            url = 'wss://alpha.3rb.io:777/V5';
        }
        return new OriginalWebSocket(url, protocols);
    };
    window.WebSocket.prototype = OriginalWebSocket.prototype;
    window.WebSocket.CONNECTING = OriginalWebSocket.CONNECTING;
    window.WebSocket.OPEN = OriginalWebSocket.OPEN;
    window.WebSocket.CLOSING = OriginalWebSocket.CLOSING;
    window.WebSocket.CLOSED = OriginalWebSocket.CLOSED;
    window.WebSocket.__proto__ = OriginalWebSocket.__proto__;

    var origGetJSON = $.getJSON;
    $.getJSON = function(url, callback) {
        if (typeof url === 'string' && url.indexOf('159.65.236.114') !== -1) {
            return;
        }
        return origGetJSON(url, callback);
    };

    if (window.io && window.io.connect) {
        var origConnect = window.io.connect;
        window.io.connect = function(url) {
            if (typeof url === 'string' && url.indexOf('adminmessage') !== -1) {
                return { on: function() {}, emit: function() {} };
            }
            return origConnect(url);
        };
    }
})();
