

Ext.define('StratGo.view.Login', {
        extend  : 'Ext.Container',
        xtype   : 'login-form',
        requires: [
            'Ext.dataview.DataView',
            'StratGo.view.MyDataViewStrategies',
            'StratGo.view.MyDataItemStrategies'
        ],
        config  : {
            layout  : {
                type: 'vbox'
            },
            defaults: {
                style: 'width:60%; margin:auto;'
            },
            items   : [
                {
                    xtype: 'fieldset',
                    title: 'Log In',

                    items: [
                        {
                            xtype: 'textfield',
                            name : 'username',
                            label: 'Username'
                        },
                        {
                            xtype: 'passwordfield',
                            name : 'password',
                            label: 'Password'
                        }


                    ]
                },
                {
                    xtype: 'button',
                    text : 'Log In',
                    ui   : 'action',
                    name : 'LoginButton',

                }

            ]
        },

        onLoginButtonTapped: function () {
            var username = this.down('textfield[name="username"]').getValue();
            var password = this.down('passwordfield[name="password"]').getValue();

            Parse.User.logIn(username, password, {
                success: function (user) {
                    Ext.Msg.alert('login successful');
                    var token = user._sessionToken;
                    Ext.ux.parse.data.ParseConnector.setSessionToken(token);
                    Ext.Viewport.setActiveItem(Ext.create('StratGo.view.Main',{
                        sessionToken: token
                    }));


                },
                error  : function (user, error) {
                    // The login failed. Check error to see why.
                    handleParseError(error);

                }
            });
        },

        initialize: function () {
            var LoginButton = this.down('button[name="LoginButton"]');
            LoginButton.on('tap', this.onLoginButtonTapped, this)
        }
    }
)