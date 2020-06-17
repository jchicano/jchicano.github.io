module.exports = {
    siteMetadata: {
        description: "Página personal de Jesús David Chicano Galindo",
        locale: "en",
        title: "Jesús David Chicano",
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: false,
                theme: "gh-inspired",
            },
        },
    ],
}