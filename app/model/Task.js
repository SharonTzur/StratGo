Ext.define('StratGo.model.Task', {
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
            {name: 'desc', type: 'string'},
            {name: 'isDone', type: 'boolean'},
            {name: 'isFrom', type: 'auto'},
            {name: 'How', type: 'auto'},
            {name: 'Why', type: 'auto'},
            {name: 'Example', type: 'auto'},
            {name: 'Tip', type: 'auto'}



        ]
    }



});
