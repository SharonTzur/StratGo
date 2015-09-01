Ext.define('StratGo.view.MyDataViewMissions', {
    extend  : 'Ext.dataview.DataView',
    xtype   : 'mydataviewmissions',
    requires: ['StratGo.view.MyDataItemMissions'],

    config: {
        scrollable   : true,
        useComponents: true,
        defaultType  : 'mydataitemmissions',
    },


    constructor: function () {
        this.callParent(arguments);
        this.setStore(Ext.getStore('taskStore'));
    },


    initialize: function () {
        this.callParent(arguments);

    }
});