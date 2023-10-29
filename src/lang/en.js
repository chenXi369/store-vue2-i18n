export default {
    route: {
        Home: 'Home',
        Login: 'Login',
        Register: 'Register',
        Account: 'Account'
    },
    navbar: {
        callme: 'Call me',
        loginName: 'Sign in',
        goodCar: 'Cart',
        profile: 'Profile',
        theme: 'Theme',
        size: 'Global Size'
    },
    footer: {
        listKeys: ['PRODUCTS', 'OUR COMPANY', 'YOUR ACCOUNT', 'Information'],
        itemList: [{
                key: 'PRODUCTS',
                values: ['Prices drop', 'New products', 'Best sales']
            },
            {
                key: 'OUR COMPANY',
                values: ['Delivery', 'Legal Notice', 'Secure payment', 'Privacy Policy']
            },
            {
                key: 'YOUR ACCOUNT',
                values: ['Personal info', 'Orders', 'Addresses', 'Vouchers']
            },
            {
                key: 'Information',
                values: ['Hong Kong Shimao Import and export Trading Co Ltd', 'New products', 'Best sales']
            },
        ]
    },
    login: {
        title: 'Log in to your account',
        logIn: 'Sign in',
        email: 'Email',
        password: 'Password',
        noAccount: 'No account? Create one here'
    },
    register: {
        title: 'Create an account',
        logIn: 'save',
        email: 'Email',
        password: 'Password',
        sex: 'Social title',
        birthDay: 'BirthDay',
        username: 'Nick name',
        sexArr: ['male', 'female'],
        agreement: 'I agree to the conditions and the privacy policy'
    },
    permission: {
        addRole: 'New Role',
        editPermission: 'Edit',
        roles: 'Your roles',
        switchRoles: 'Switch roles',
        tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
        delete: 'Delete',
        confirm: 'Confirm',
        cancel: 'Cancel'
    },
    settings: {
        title: 'Page style setting',
        theme: 'Theme Color',
        tagsView: 'Open Tags-View',
        fixedHeader: 'Fixed Header',
        sidebarLogo: 'Sidebar Logo'
    }
}