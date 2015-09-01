Ext.define('StratGo.view.MyDataViewStrategies', {
    extend: 'Ext.dataview.DataView',
    xtype:'mydataviewstrategies',
    requires   : ['StratGo.view.MyDataItemStrategies'],

    config: {
        scrollable: true,
        useComponents: true,
        defaultType: 'mydataitemstrategies'
    },


    constructor: function () {
        this.callParent(arguments);
        var store = Ext.create("StratGo.store.Strategies");

        store.load({
            success: function (data) {
                console.log(data);
            }
        });
        this.setStore(store);
    }
});