Ext.define('StratGo.view.MyDataItemStrategies', {
    extend  : 'Ext.dataview.component.DataItem',
    xtype   : 'mydataitemstrategies',
    myFields: {},
    config  : {
        tasks : null,
        layout  : 'vbox',
        padding : 10,
        defaults: {
            margin: 5
        },
        items   : [
            {
                xtype: 'button',
                name : 'strategyButton'
            },

            {
                xtype: 'container',
                name : 'strategyDesc'
            }

        ]

    },

    updateRecord: function (newRecord) {
        this.callParent(arguments);
        var strategyButton = this.down('button[name="strategyButton"]');
        strategyButton.setText(newRecord.get('title'));
        strategyButton.on('tap', this.onStrategyButtonTapped, this, {record: newRecord});
        var strategyDesc = this.down('container[name="strategyDesc"]');
        strategyDesc.setHtml(newRecord.get('desc'));
        debugger;
    },


    onStrategyButtonTapped: function(scope, event, optObj) {
        var record = optObj['record'];
        var strategyTitle = record.data.title;
        var  strategy = new Parse.Query("Strategy");
        strategy.equalTo("title", strategyTitle );
        strategy.find({
            success: function (strategy) {
                var query = new Parse.Query("Task");
                var strat = strategy[0];
                query.equalTo("isFrom", strat);
                query.find({
                    success: function (tasks) {
                        console.log('tasks');
                        console.log(tasks);
                        var mainMissions = Ext.create('StratGo.view.Main-Missions', {
                            tasks: tasks
                        });
                        Ext.Viewport.setActiveItem(mainMissions);
                    }
                });
            }
        });
    },

    constructor           : function () {
        this.callParent(arguments);


    }


});
