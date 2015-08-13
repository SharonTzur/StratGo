Ext.define('StratGo.model.Strategy', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.ux.parse.data.proxy.Parse',
        'Ext.ux.parse.data.reader.Parse'
    ],
    config: {
        idProperty: 'objectId',
        fields    : [
            {name: 'objectId', type:'auto', persist: false},
            {name: 'title', type: 'string'},
            {name: 'desc', type: 'string'}
        ],
        proxy: {
            type  : 'parse',
            url   : 'https://api.parse.com/1/classes/Strategy',
            reader: 'parse'
        }
    }



});
