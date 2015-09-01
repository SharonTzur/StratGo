Ext.define('StratGo.view.MyDataItemStrategies', {
    extend  : 'Ext.dataview.component.DataItem',
    xtype   : 'mydataitemstrategies',
    myFields: {},
    config  : {
        tasks   : null,
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
    },


    onStrategyButtonTapped: function (scope, event, optObj) {
        var record = optObj['record'];
        var currentUser = Parse.User.current();
        var currentUserStrategies = currentUser.attributes.UserStrategies;
        debugger;
        /// check if user already have this strategy
        var existing = false;
        if (currentUserStrategies && currentUserStrategies.length > 0) {
            for (var i = 0; i < currentUserStrategies.length; i++) {
                var strat = currentUserStrategies[i];
                if (strat) {
                    if (strat.title == record.data.title) {
                        existing = true;
                        Ext.Viewport.setActiveItem(Ext.create('StratGo.view.Main-Missions', {
                            tasks     : strat.tasks
                        }));
                    }
                }
            }
        }
        ///if not, save new strategy to user
        if (existing == false) {
            var newStrat = {
                title: record.data.title,
                desc : record.data.desc,
                tasks: record.raw.tasks
            };

            currentUser.add("UserStrategies", newStrat);
            currentUser.save();


            Ext.Viewport.setActiveItem(Ext.create('StratGo.view.Main-Missions', {
                tasks     : newStrat.tasks
            }));
        }



    },

    constructor: function () {
        this.callParent(arguments);


    }


});
