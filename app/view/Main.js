Ext.define('StratGo.view.Main', {
        extend  : 'Ext.Container',
        requires: [
            'Ext.dataview.DataView',
            'StratGo.view.MyDataViewStrategies',
            'StratGo.view.MyDataItemStrategies'
        ],
        config: {
            layout: {
                type:'vbox',
                align:'stretch'
            },
            items: [
                {
                    xtype: 'mydataviewstrategies',
                    flex: 1,
                    config: {
                    }
                }
            ]
        },

        constructor: function() {
            this.callParent(arguments);
        },

        initialize: function() {
            this.callParent(arguments);
           var dv = this.items.getAt(0).getId();
            dv.sessionToken=this.sessionToken;
        },
}
)