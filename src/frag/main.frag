head
    title < "LGBT - #[alias title]"
    link
        href: "https://fonts.googleapis.com/css?family=Quicksand"
        rel: "stylesheet"
        type: "text/css"
    link
        rel: "icon"
        href: "images\logo.png"
    link
        rel: "stylesheet"
        href: "http://www.w3schools.com/lib/w3.css"

body
    nav.main
        ul#nav
            li.logo < a(href: "index.html") < img
                src: "images\logo.png"
                alt: "Logo"
                style: "height: 150px; width: 150px;"
            li < a(href: "index.html") < "Home"
            li < a(href: "dictionary.html") < "Dictionary"
            li < a(href: "history.html") < "LGBT History"
            li < a(href: "help.html") < "Help Resources"
            li < a(href: "map.html") < "Legislation Map"
            li < a(href: "sources.html") < "Sources"

    script < src: "scripts\misc.js"
    script < src: "scripts\dictDisplay.js"
    script < src: "scripts\genButtonList.js"
    script < src: "scripts\tooltipInfo.js"
    script < src: "scripts\timelineTooltips.js"
    script < src: "scripts\bioDisplay.js"
    script < src: "scripts\eventDisplay.js"

    section
        #[content]

footer
    ul#footer(style: "list-style-type:none")
        li < a(href: "#") < "Top"
        li < a(href: "index.html") < "Home"
        li < a(href: "dictionary.html") < "Dictionary"
        li < a(href: "history.html") < "LGBT History"
        li < a(href: "help.html") < "Help Resources"
        li < a(href: "map.html") < "Legislation Map"
        li < a(href: "sources.html") < "Sources"