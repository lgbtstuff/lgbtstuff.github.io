head
    title < "LGBT  - #[alias title]"

body
    p.header
        ul#nav(style: "list-style-type:none")
            li < a(href: "index.html") < img
                src: "images\logo.png"
                alt: "Logo"
                style: "height: 60px; width: 60px;"
            li < a(href: "index.html") < "Home"
            li < a(href: "dictionary.html") < "Dictionary"
            li < a(href: "history.html") < "LGBT History"
            li < a(href: "help.html") < "Help Resources"
            li < a(href: "map.html") < "Legislation Map"
    div
        #[content]