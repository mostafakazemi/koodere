import VueRouter from 'vue-router';

import Header from '../components/Layout/Header'
import Container from '../components/Home/Container'

import Index from '../components/Home/Index'
import Fresh from '../components/Home/Fresh'
import Home from '../components/Navbar/Home'
import Stores from '../components/Home/Stores'
import Map from '../components/Home/Map'

import Login from '../components/Navbar/Mobile'
import ActivationCode from '../components/Navbar/ActivationCode'

import Password from '../components/Navbar/Password'
import ChangePassword from '../components/User/Password'
import Profile from '../components/User/Profile'

import CreateBusiness from '../components/Business/Create'
import BusinessPanel from '../components/Business/Panel'
import BusinessDashboard from '../components/Business/Dashboard'
import BusinessSettings from '../components/Business/Settings'
import Category from '../components/Business/Category/Index'
import Ware from '../components/Business/Ware/Index'
import CreateWare from '../components/Business/Ware/Create'
import EditWare from '../components/Business/Ware/Edit'

import Store from '../components/Store/Index'
import BagPanel from '../components/Store/Panel'
import Cart from '../components/Store/Cart'

import Sticky from '../components/Test/Sticky'
import Counter from '../components/Test/Counter'


let mode = 'history';
let routes = [
    {
        path: '/test',
        components: {
            header: Header,
            default: Sticky,
        },
    },
    {
        path: '/',
        components: {
            header: Header,
            default: Container,
        },
        children: [
            {
                path: '',
                components: {
                    modal: Home,
                    default: Index,
                },
            },
            {
                path: 'fresh',
                components: {
                    modal: Home,
                    default: Fresh,
                },
            },
            {
                path: 'login',
                components: {
                    modal: Login,
                    default: Index,
                },
            },
            {
                path: 'login/:mobile',
                components: {
                    modal: ActivationCode,
                    default: Index,
                },
            },
            {
                path: 'password/:mobile',
                components: {
                    modal: Password,
                    default: Index,
                },
            },
            {
                path: 'stores',
                components: {
                    modal: Home,
                    default: Stores,
                },
            },
            {
                path: 'map',
                components: {
                    modal: Home,
                    default: Map,
                },
            },

        ],
    },
    {
        path: '/password',
        components: {
            header: Header,
            default: ChangePassword,
        },
    },
    {
        path: '/profile',
        components: {
            header: Header,
            default: Profile,
        },
    },
    {
        path: '/add-business',
        components: {
            header: Header,
            default: CreateBusiness,
        },
    },
    {
        path: '/business',
        components: {
            header: Header,
            default: BusinessPanel
        },
        children: [
            {
                name: 'panel',
                path: 'panel',
                components: {
                    panelContent: BusinessDashboard
                }
            },
            {
                name: 'settings',
                path: 'settings',
                components: {
                    panelContent: BusinessSettings
                }
            },
            {
                name: 'category',
                path: 'category',
                components: {
                    panelContent: Category
                }
            },
            {
                name: 'wares',
                path: 'wares',
                components: {
                    panelContent: Ware
                }
            },
            {
                name: 'new-ware',
                path: 'new-ware',
                components: {
                    panelContent: CreateWare
                }
            },
            {
                name: 'edit-ware',
                path: 'edit-ware/:category&:ware',
                components: {
                    panelContent: EditWare
                }
            },
        ]
    },
    {
        path: '/store',
        components: {
            header: Header,
            default: BagPanel
        },
        children: [
            {
                name: 'index',
                path: ':business',
                components: {
                    panelContent: Store
                }
            },
        ]
    },
    {
        path: '/cart',
        components: {
            header: Header,
            default: Cart
        },
    },
];

export default new VueRouter({
    routes,
    mode
});
