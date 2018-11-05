const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Mark Wilkins | Fullstack Development'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: path.join(__dirname, 'data')
            }
        },
        'gatsby-transformer-json',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui'
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-favicon',
            options: {
                logo: path.join(__dirname, '/src/images/logo.svg'),
                background: '#fff',
                theme_color: '#fff',
                display: 'standalone'
            }
        }
    ]
};
