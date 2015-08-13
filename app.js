/*
 This file is generated and updated by Sencha Cmd. You can edit this file as
 needed for your application, but these edits will have to be merged by
 Sencha Cmd when it performs code generation tasks such as generating new
 models, controllers or views and when running "sencha app upgrade".

 Ideally changes to this file would be limited and most work would be done
 in other places (such as Controllers). If Sencha Cmd cannot merge your
 changes and its generated code, it will produce a "merge conflict" that you
 will need to resolve manually.
 */

Ext.application({
    name: 'StratGo',

    parseConfig: {
        applicationId: 'eJukmpYRRnPheSJjnmUUPtfk1e2z7oOSEMvxW8WS',
        apiKey       : '2sdcBVefmIrzLdqdaGwLL80tTNWww0sAStBjWuSa'
    },

    requires: [
        'Ext.ux.parse.app.Application',
        'Ext.ux.parse.data.reader.Parse',
        'Ext.ux.parse.data.proxy.Parse',
        'Ext.MessageBox',
    ],
    models  : [
        /*   'TestStrat.model.Example',
         'StratGo.model.How',*/
        'StratGo.model.Task',
        'StratGo.model.Strategy'
        /* 'StratGo.model.Tip',
         'StratGo.model.Why'*/

    ],

    stores: [
        /*    'StratGo.store.Examples',
         'StratGo.store.Hows',*/
        //'StratGo.store.Tasks',
        'StratGo.store.Strategies'
        /*  'StratGo.store.Tips',
         'StratGo.store.Whys',*/

    ],
    views : [
        'StratGo.view.SignUp',
        'StratGo.view.Login',
        'Main',
        'Main-Missions'
    ],

    icon: {
        '57' : 'resources/icons/Icon.png',
        '72' : 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460'  : 'resources/startup/320x460.jpg',
        '640x920'  : 'resources/startup/640x920.png',
        '768x1004' : 'resources/startup/768x1004.png',
        '748x1024' : 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        Parse.initialize("eJukmpYRRnPheSJjnmUUPtfk1e2z7oOSEMvxW8WS", "CLQTl0cAsj6yaGM2LT6GqjOAiloBVRzSlCJcZTnJ");

        // Destroy the #appLoadingIndicator element

        Ext.fly('appLoadingIndicator').destroy();

      /*  var store = Ext.create("StratGo.store.Strategies");

       store.load({
            callback: function (data) {
                Ext.Viewport.add(Ext.create('StratGo.view.Main',{
                    store:store
                }));
            }
        });*/
        //Ext.Viewport.add(Ext.create('StratGo.view.Starter'));
        Ext.Viewport.add(Ext.create('StratGo.view.Main'));

                // Initialize the main view


 /*       var Strategy = Parse.Object.extend("Strategy");
        var strategy = new Strategy();

        strategy.save({
        title: "Try Strategy", desc: "Learn how to use strategies",
            tasks: [
            {title:"task1", desc:"desc of task1", isDone:false,
                How: "Open task 1", Why: "for trying", Tip: "tap on it", Example: "tapping on screen"},
            {title:"task2", desc:"desc of task2", isDone:false,
                How: "Open task 2", Why: "for trying2", Tip: "tap on it2", Example: "tapping on screen2"},
            {title:"task3", desc:"desc of task3", isDone:false,
                How: "Open task 3", Why: "for trying3", Tip: "tap on it3", Example: "tapping on screen3"} ]

        }, {

            success: function(strategy) {
            debugger;
            },
            error: function(strategy, error) {
                debugger;

                // The save failed.
                // error is a Parse.Error with an error code and message.
            }
        });*/


    },


    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
})
;
