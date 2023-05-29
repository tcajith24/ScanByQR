export const menuItems = [
    {
        title: 'About US',
        url: '/about-us',
        submenu: [],
    },
    {
        title: 'Car',
        url: 'car',
        submenu: [
            {
                title: 'New Car',
                url: '/car/new-car',
                scope: 'car',
            },
            {
                title: 'Used Car',
                url: '/car/used-car',
                scope: '',
            },
            {
                title: 'Sell Car',
                url: '/car/sell-car',
                scope: '',
            },
        ],
    },
    {
        title: 'Bike',
        url: 'bike',
        submenu: [
            {
                title: 'New Bike',
                url: '/bike/new-bike',
                scope: 'bike',
            },
            {
                title: 'Used Bike',
                url: '/bike/used-bike',
                scope: '',
            },
            {
                title: 'Sell Bike',
                url: '/bike/sell-bike',
                scope: '',
            },
        ],
    },
    {
        title:'e Auction Vehicle',
        url:'/e-auction-vehicle',
        submenu:[
            {
                title:'e Auction Car',
                url:'/eAuction/eAuction-car',
                scope:'e Auction Vehicle',
            },
            {
                title:'e Auction Bike',
                url:'/eAuction/eAuction-bike',
                scope: '',
            },
        ],
    },
    {
        title:'contact us',
        url:'/contact-us',
        submenu:[],
    },
    {
        title:'more',
        url:'more',
        submenu:[
            {
                title:'Insurance',
                url:'/insurance',
                scope:'insurance',
                subChildMenu:[{
                    title:'Car Insurance',
                    url:'/car-insurance',
                },
                {
                    title:'Bike Insurance',
                    url:'/bike-insurance',
                }]
            },
            {
                title:'Car Service',
                url:'/car-service',
                scope: 'FORMS',
                subChildMenu:[{
                    title:'Car Service',
                    url:'/car-service',
                }]
            },
            {
                title:'Bike Service',
                url:'/bike-service',
                scope: 'charts',
                subChildMenu:[{
                    title:'Bike Service',
                    url:'/bike-service',
                }]
            },
            {
                title:'Maps',
                url:'',
                scope: 'Maps',
                subChildMenu:[{
                    title:'Customer Reviews',
                    url:'/Customer-Reviews',
                },
                {
                    title:'Blog',
                    url:'/more/blog',
                },
                {
                    title:'FAQ',
                    url:'/more/faq',
                },
            ]},
        ],
    }
];