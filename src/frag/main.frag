head
    title < "LGBT - #[alias title]"
    link
        href: "https://fonts.googleapis.com/css?family=Quicksand"
        rel: "stylesheet"
        type: "text/css"

body
    nav
        ul#nav(style: "list-style-type:none")
            li < a(href: "index.html") < img.logo
                src: "images\logo.png"
                alt: "Logo"
                style: "height: 150px; width: 150px;"
            li < a(href: "index.html") < "Home"
            li < a(href: "dictionary.html") < "Dictionary"
            li < a(href: "history.html") < "LGBT History"
            li < a(href: "help.html") < "Help Resources"
            li < a(href: "map.html") < "Legislation Map"
    section
        #[content]