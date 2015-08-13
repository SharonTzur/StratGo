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



        initialize: function() {
           var dv = this.items.getAt(0).getId();
            dv.setStore=this.store;
        }
    }
)