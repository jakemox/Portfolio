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
            subtitle: 'Virtual "Scratch Map" allowing users to record and see countries they have visited around the world.',
            image: require('../img/scratchmyapp.jpg'),
            description: 'Virtual "Scratch Map" allowing users to record and see countries they have visited around the world. Also provides suggestions of sites to visit in cities so that users can plan their next trip.',
            stack: [js, php, laravel, mapbox, html, css],
            link: 'http://scratchmyapp.com'
        },
        {
            name: 'luxus',
            title: 'Luxus Test',
            subtitle: 'What do you want to cook today? A boiled egg please sir',
            image: require('../img/luxus.jpg'),
            description: 'Food website made as test for Luxus job interview allowing user to dynamically navigate between different cuisines based on options of their choosing.',
            stack: [react, html, bootstrap, css],
            link: ''
        },
        {
            name: 'skyscammer',
            title: 'SkyScammer',
            subtitle: 'Browse bargain flights for future trips',
            image: require('../img/skyscammer.jpg'),
            description: 'Such cheap air fares you will not believe your eyes! Happy flighting peeps',
            stack: [react, html, css, kayak],
            link: 'http://jakemoxon.com/sky-scammer'
        },
        {
            name: 'weather',
            title: 'Weather Forecast',
            subtitle: 'World weather forecasts for the week ahead',
            image: require('../img/weather.jpg'),
            description: 'How rainy will it be this week? I dont know, you tell me.',
            stack: [react, html, styledComp, accuweather],
            link: 'http://jakemoxon.com/weather-app'
        },
        {
            name: 'exchange',
            title: 'Exchange Rates',
            subtitle: 'Global currency converter',
            image: require('../img/exchange.jpg'),
            description: 'How many euros can I get for this penny?',
            stack: [js, html, css],
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

