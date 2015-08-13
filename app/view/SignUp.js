Ext.define('StratGo.view.SignUp', {
        extend: 'Ext.Container',
        xtype : 'sign-up-form',

        requires: [
            'Ext.dataview.DataView',
            'StratGo.view.MyDataViewStrategies',
            'StratGo.view.MyDataItemStrategies'
        ],
        config  : {
            layout: {
                type: 'vbox'
            },
            defaults: {
                style: 'width:60%; margin:auto;'
            },
            items : [
                {
                    xtype: 'fieldset',
                    title: 'Sign Up',
                    items: [
                        {
                            xtype: 'textfield',
                            name : 'username',
                            label: 'Username'
                        },
                        {
                            xtype: 'emailfield',
                            name : 'email',
                            label: 'Email'
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
                    text : 'Sign Up',
                    ui   : 'confirm',
                    name : 'signUpButton'
                }

            ]
        },


        initialize: function () {
            var signUpButton = this.down('button[name="signUpButton"]');
            signUpButton.on('tap', this.onSignUpButtonTapped, this)
        },

        onSignUpButtonTapped: function () {

            var username = this.down('textfield[name="username"]').getValue();
            var email = this.down('emailfield[name="email"]').getValue();
            var password = this.down('passwordfield[name="password"]').getValue();


            var user = new Parse.User();
            user.set("username", username);
            user.set("password", password);
            user.set("email", email);

            user.signUp(null, {
                success: function (user) {
                    // Hooray! Let them use the app now.
                    console.log('sign up successful');
                    console.log(user);
                },
                error  : function (user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }
    }
)