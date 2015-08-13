Ext.define('StratGo.view.MyDataViewMissions', {
    extend  : 'Ext.dataview.DataView',
    xtype   : 'mydataviewmissions',
    requires: ['StratGo.view.MyDataItemMissions'],

    config: {
        scrollable   : true,
        useComponents: true,
        html:'Tasks',
        defaultType  : 'mydataitemmissions',
    },


    initialize: function () {
        this.callParent(arguments);
    }
});