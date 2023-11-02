export default {
  route: {
    Home: 'Home',
    Login: 'Login',
    Register: 'Register',
    Account: 'Account',
    MobilePhone: 'MobilePhone',
    MobileDetail: 'MobileDetail',
    Order: 'Order'
  },
  navbar: {
    callme: 'Call me',
    loginName: 'Sign in',
    goodCar: 'Cart',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size',
    username: 'user-{name}',
    menus: ['MOBILE PHONES', 'TABLETS', 'COMPUTER HARDWARE', 'OTHER']
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
    }]
  },
  home: {
    popularPro: 'POPULAR PRODUCTS',
    allProduct: 'All Products',
    itemView: 'View Check'
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
  account: {
    title: 'Your account',
    name1: 'INFORMATION',
    name2: 'ADD FIRST ADDRESS',
    name3: 'ORDER HISTORY AND DETAILS',
    logoutName: 'Sign out',
    dialogTitle: 'Confirm Whether To Exit',
    dialogStatus: 'Warning',
    confirm: 'Confirm',
    cancel: 'Cancel',
    logoutSuccess: 'Succeed Logout'
  },
  mobilePhone: {
    title: 'MOBILE PHONES',
    show: 'Showing',
    sort: 'Sort by',
    quantity: 'Quantity',
    share: 'Share',
    description: 'Description',
    productDetails: 'Product Details',
    toCart: 'ADD TO CART',
    sortText: 'Place Select',
    totalText: 'There are {0} products',
    pageText: 'Showing [0-1] of {0} item(s)',
    filterParam: [{
      value: '1',
      label: 'Sales, highest to lowest'
    }, {
      value: '2',
      label: 'Relevance'
    }, {
      value: '3',
      label: 'Name, A to Z'
    }, {
      value: '4',
      label: 'Name, Z to A'
    },
    {
      value: '5',
      label: 'Price, low to high'
    },
    {
      value: '6',
      label: 'Price, high to low'
    }]
  },
  order: {
    shoppingCart: 'My shopping cart',
    cartItem: 'item',
    showDetails: 'show details',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    free: 'Free',
    totalTaxExcl: 'Total(tax excl.)',
    totalTaxIncl: 'Total(tax incl.)',
    taxes: 'Taxes',
    promoCode: 'Have a promo code ?',
    tips: "The order will only be confirmed when vou clickon the button 'Order with an obligation to pay' atthe end of the checkout!",
    securityPolicy: 'Security policy (edit with Customer reassurance module)',
    deliveryPolicy: 'Delivery policy (edit with Customer reassurance module)',
    returnPolicy: 'Return policy (edit with Customer reassurance module)'
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
