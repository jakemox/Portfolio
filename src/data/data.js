const html = {
    name: 'HTML',
    image: require('../img/html.png')
}

const css = {
    name: 'CSS',
    image: require('../img/css.png')
}

const js = {
    name: 'JS',
    image: require('../img/js.png')
}

const react = {
    name: 'React',
    image: require('../img/react.png')
}

const php = {
    name: 'PHP',
    image: require('../img/php.png')
}

const laravel = {
    name: 'Laravel',
    image: require('../img/laravel.png')
}

const mapbox = {
    name: 'Mapbox API',
    image: require('../img/mapbox.png')
}

const bootstrap = {
    name: 'Bootstrap',
    image: require('../img/bootstrap.png')
}

const kayak = {
    name: 'Kayak API',
    image: require('../img/kayak.png')
}

const styledComp = {
    name: 'Styled Components',
    image: require('../img/styledcomponents.png')
}

const accuweather = {
    name: 'Accuweather API',
    image: require('../img/accuweather.png')
}

export const data = {
    portfolioItems: [
        {
            name: 'scratchmyapp',
            title: 'ScratchMyApp.com',
            subtitle: 'Virtual "Scratch Map" and tourism website.',
            image: require('../img/scratchmyapp.jpg'),
            description: "ScratchMapp is an app that lets users visually explore the world, look at details of countries on a map view and save the countries they have visited by clicking them on the map. For each country, users can explore the top activities in the capital city. Cities can also be found using a search functionality, and user's progress on a journey to visit all the world's countries can be tracked in a profile view. The app is still a work in progress.",
            stackInfo: [
                'Back-end was written in PHP using the Laravel MVC framework.',
                'Map functionality was created with the Mapbox platform.',
                'Front end code is written in plain Javascript and some React components (with a conversion to a full React app in consideration)',
                'Content has mostly been collected from public APIs - attractions from Google Places, city pictures using flickr',
                'App is responsive and mobile use has been taken into consideration at all stages of the design.'
            ],
            stack: [js, php, laravel, mapbox, html, css],
            color: '#169ca7',
            link: 'http://scratchmyapp.com'
        },
        {
            name: 'luxus',
            title: 'Cookery App',
            subtitle: 'What do you want to cook today? A boiled egg please sir',
            image: require('../img/luxus.jpg'),
            description: 'Food website made as test for Luxus job interview allowing user to dynamically navigate between different cuisines based on options of their choosing. I was provided with a design and recreated it using React and Bootstrap. If the user selects a certain type of cuisine, the options below will change and display a relevant selection of recipes.',
            stackInfo: [
                'Code is written using React and bundled using Webpack.',
                'Styling is provided with Bootstrap.'
            ],
            stack: [react, html, bootstrap, css],
            color: '#28a745',
            link: 'http://jakemoxon.com/luxus-test'
        },
        {
            name: 'skyscammer',
            title: 'SkyScammer',
            subtitle: 'Browse bargain flights for future trips',
            image: require('../img/skyscammer.jpg'),
            description: 'Such cheap air fares you will not believe your eyes! Happy flighting peeps. SkyScammer started as a Hackathon project and allows users to search for flights between a selection of airports on a date of their choosing and then displays the price of that flight (multiplied by 1000) and the flight times. In future, I would like to make this app more advanced by adding an option to visit the vendors of the displayed flights so that users can actually make the purchase.',
            stackInfo: [
                'Code is written using React and bundled using Webpack.',
                'Data is fetched from Kayak API.',
            ],
            stack: [react, html, css, kayak],
            color: 'rgb(120, 209, 236)',
            link: 'http://jakemoxon.com/sky-scammer'
        },
        {
            name: 'weather',
            title: 'Weather Forecast',
            subtitle: 'World weather forecasts for the week ahead',
            image: require('../img/weather.jpg'),
            description: 'How rainy will it be this week? I dont know, you tell me. This simple weather app makes use of the Accuweather API to display hourly, daily and weekly forecasts for locations worldwide. I developed it using React along with Styled Components to provide component based CSS. It is a fully responsive web app.',
            stackInfo: [
                'Code is written using React and bundled using Webpack.',
                'Styling is provided with Styled Components.',
                'Data is fetched from Accuweather API.'
            ],
            stack: [react, html, styledComp, accuweather],
            color: 'rgb(120, 209, 236)',
            link: 'http://jakemoxon.com/weather-app'
        },
        {
            name: 'exchange',
            title: 'Exchange Rates',
            subtitle: 'Currency converter with buy and sell rates.',
            image: require('../img/exchange.jpg'),
            description: "How many euros can I get for this penny? I don't know sir but please ask this lovely app. I programmed this app using object orientated Vanilla JavaScript to allow users to see exchange rates from 6 of the main global currencies to a wide range of international currencies, displaying both buy and sell rates. The data is fetched from 'Exchange Rates' API and shows live rates as well as historic ones. It is fully responsive.",
            stackInfo: [
                "Code is written in Object Orientated Vanilla JavaScript",
                "Data is fetched from 'Exchange Rates' API"
            ],
            stack: [js, html, css],
            color: '#f29700',
            link: 'http://jakemoxon.com/exchange-rates'
        }
    ],
    stack : [html, css, js, react, php, laravel],
    social : [
        {
            name: 'LinkedIn',
            image: require('../img/linkedin.svg'),
            link: 'https://www.linkedin.com/in/jakemox/'
        },
        {
            name: 'GitHub',
            image: require('../img/github.svg'),
            link: 'https://github.com/jakemox'
        },
        {
            name: 'Instagram',
            image: require('../img/instagram.svg'),
            link: 'https://www.instagram.com/jakemox99/'
        }
    ]      
};

