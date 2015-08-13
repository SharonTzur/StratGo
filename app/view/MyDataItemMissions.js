Ext.define('StratGo.view.MyDataItemMissions', {
    extend  : 'Ext.dataview.component.DataItem',
    xtype   : 'mydataitemmissions',
    myFields: {},
    config  : {
        layout  : 'vbox',
        padding : 10,
        defaults: {
            margin: 5
        },
        items   : [
            {
                xtype: 'container',
                name : 'missionTitle'
            },
            {
                xtype: 'container',
                name : 'missionDesc'
            },
            {
                xtype: 'button',
                name : 'isDoneButton',
                text : 'isDone?'
            },
            {
                xtype : 'container',
                layout: 'hbox',
                items : [
                    {
                        xtype: 'button',
                        text : 'How',
                        name : 'howButton',
                        type : 'moreButtons'

                    },
                    {
                        xtype: 'button',
                        text : 'Why',
                        name : 'whyButton',
                        type : 'moreButtons'
                    },
                    {
                        xtype: 'button',
                        text : 'Example',
                        name : 'exampleButton',
                        type : 'moreButtons'
                    },
                    {
                        xtype: 'button',
                        text : 'Tip',
                        name : 'tipButton',
                        type : 'moreButtons'
                    }

                ]
            },
        ]

    },

    updateRecord: function (newRecord) {
        this.callParent(arguments);
        if (!newRecord) {
            return;
        }
        this.__record = newRecord;
        var missionTitle = this.down('container[name="missionTitle"]');
        missionTitle.setHtml(newRecord.get('title')).setStyle('font-size:35px');

        var missionDesc = this.down('container[name="missionDesc"]');
        missionDesc.setHtml(newRecord.get('desc')).setStyle('font-size:20px');


        var isDoneButton = this.down('button[name="isDoneButton"]');

        if (newRecord.data.isDone == true) {
            isDoneButton.setUi('confirm');
        }
        if (newRecord.data.isDone == false) {
            isDoneButton.setUi('decline');
        }

        isDoneButton.on('tap', this.onIsDoneButtonTapped, this, {record: newRecord});

        var howButton = this.down('button[name="howButton"]');
        howButton.on('tap', this.onHowButtonTapped, this, {record: newRecord});

        var whyButton = this.down('button[name="whyButton"]');
        whyButton.on('tap', this.onWhyButtonTapped, this, {record: newRecord});

        var exampleButton = this.down('button[name="exampleButton"]');
        exampleButton.on('tap', this.onExampleButtonTapped, this, {record: newRecord});

        var tipButton = this.down('button[name="tipButton"]');
        tipButton.on('tap', this.onTipButtonTapped, this, {record: newRecord});

        /*  var howButtons = Ext.ComponentQuery.query('[name="howButton"]');
         for (var i = 0; i < howButtons.length; i++) {
         var howButton = howButtons[i];
         //howButton.on('tap', this.onHowButtonTapped, this, {record: newRecord});
         howButton.setHtml(
         'How To: ' + newRecord.data.title+'<br>'+
         newRecord.data.How
         );
         }*/

    },

    onIsDoneButtonTapped: function (scope, event, optObj) {
        var record = optObj['record'];
        record.data.isDone = true;
// UPDATING DATABASE ITSELF - NEED TO ADD USERS!!
        var query = new Parse.Query("Task");
        query.get(record.internalId, {
            success: function(task) {
                task.set("isDone", true);
                task.save(null, {
                    success: function(task) {
                        alert('isDone Updated!');
                    },
                    error: function(task, error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    }
                });
            },

            error: function(object, error) {
                // error is an instance of Parse.Error.
            }
        });

    },

    onHowButtonTapped: function (scope, event, optObj) {
        record = optObj['record'];
        Ext.Msg.alert('How To: ' + record.data.title, record.data.How, Ext.emptyFn);

    },
    onWhyButtonTapped: function (scope, event, optObj) {
        record = optObj['record'];
        Ext.Msg.alert('Why To: ' + record.data.title, record.data.Why, Ext.emptyFn);

    },
    onExampleButtonTapped: function (scope, event, optObj) {
        record = optObj['record'];
        Ext.Msg.alert('Example To: ' + record.data.title, record.data.Example, Ext.emptyFn);

    },
    onTipButtonTapped: function (scope, event, optObj) {
        record = optObj['record'];
        Ext.Msg.alert('Tip To: ' + record.data.title, record.data.Tip, Ext.emptyFn);

    },


    constructor: function () {
        this.callParent(arguments);

    }


});
