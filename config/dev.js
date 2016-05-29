const config = {
    ldapConfig:{
        ldap:{
            url:'',
            base:'',
            bindDN:'',
            bindCredentials:''
        },
        integrated: false
    },
    userDataOptions:{
        fieldsToReturn: ['displayName', 'mail']
    }
};

export default config;