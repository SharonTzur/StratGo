Ext.define('StratGo.view.Main-Missions', {
        extend  : 'Ext.Container',
        xtype   : 'mainmissions',
        requires: [
            'Ext.dataview.DataView',
            'StratGo.view.MyDataViewMissions',
            'StratGo.view.MyDataItemMissions'
        ],
        config  : {
            tasks : null,
            layout: {
                type : 'vbox',
                align: 'stretch'
            },
            items : [

                {
                    xtype    : 'mydataviewmissions',
                    flex     : 24,
                    config   : {},
                    taskData : this.taskData,
                    taskStore: this.taskStore
                },
                {
                    xtype:'button',
                    flex:1,
                    ui: 'back',
                    style: 'width:10%;align:left',
                    text: 'Back',
                    handler: function() {
                        Ext.Viewport.setActiveItem(Ext.create('StratGo.view.Main'))

                    }
                }
            ]
        },

        constructor : function(){
            this.callParent(arguments);
            this.setTasks(this.tasks);
        },
        initialize: function () {
            this.callParent(arguments);
            var taskData = JSON.stringify(this.getTasks());
            var taskStore = Ext.create("Ext.data.Store", {
                model   : "StratGo.model.Task",
                data    : Ext.JSON.decode(taskData),
                autoLoad: true,
                storeId: 'taskStore'
            });
        /*    taskStore.data.internalId = this.internalId;
            var dvm = this.items.getAt(0);
            dvm.taskData = taskData;
            dvm.setStore(taskStore);
*/

        }
    }
)