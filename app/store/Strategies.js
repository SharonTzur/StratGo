Ext.define('StratGo.store.Strategies', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.ux.parse.data.proxy.Parse',
        'Ext.ux.parse.data.reader.Parse'
    ],
    config: {
        storeId: 'strategyStore',
        model  : 'StratGo.model.Strategy',
        proxy: {
            type: 'parse',
            url : 'https://api.parse.com/1/classes/Strategy'
        }
    }
});