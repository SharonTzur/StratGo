Ext.define('StratGo.view.Starter', {
        extend  : 'Ext.Container',
        config: {
            layout: {
                type:'vbox',
                align:'stretch'
            },
            items: [
                {
                    flex:5,
                   title: 'Log In!',
                    items: [{
                        xtype:'login-form'
                    }]
                },
                {
                    flex:0.5,
                    xtype:'button',
                    name:'signUp',
                    text:'Still not Signed Up? Click Here :)',
                    handler: function() {
                        var signUp = Ext.create('StratGo.view.SignUp');
                        cont = this.up().getAt(0);
                        cont.setItems(signUp);
                    }
                },
                {
                    flex:5
                }
            ]
        },



        initialize: function() {
         var signUpButton = this.down('button[name="signUp"]');
        }
    }
)