import Link from 'next/link'

const linkInfo = [
    {
        "href":"/",
        "name":"Home"
    },
    {
        "href":"/about",
        "name":"About"
    },
    {
        "href":"/projects",
        "name":"My Work"
    },
    {
        "href":"/contact",
        "name":"Contact"
    }
]

const externalLinksinfo = [
    {
        "name":"LINKEDIN",
        "href":"https://www.linkedin.com/in/ivan-johannes86458427/",
        "logo":"/static/images/linkedin.svg"
    },
    {
        "name":"FACEBOOK",
        "href":"https://www.facebook.com/98.ivan.johannes/",
        "logo":"/static/images/facebook.svg"
    },
    {
        "name":"INSTAGRAM",
        "href":"https://www.instagram.com/ivan.johannes/",
        "logo":"/static/images/instagram.svg"
    }
]

const openNav = () => {
    document.getElementById("MainNav").style.display = "block"
    document.getElementById("menuButton").style.display = "none"
}

const Header = () => {

    const Links = linkInfo.map((link) => {
        return <a key={link.href} href={link.href} className="navLinks">{link.name}</a>
    }) 

    const externalLinks = externalLinksinfo.map((link) => {
        return <a key={link.name} href={link.href} target="_blank" className="externalLinks"><img className="externalLinks" src={link.logo} alt={link.name} /></a>
    })

    return (
        <div>
            <div id="MainNav">
                <div id="logo">
                <img onClick={() => {window.location.href = "/"}} src="/static/images/logoIcon.svg" alt="logoIcon" id="headerLogo"/>
                </div>
                {Links}
                <div id="externalLinks">
                    {externalLinks}
                </div>
            </div>
            <div id="menuButton" onClick={() => openNav()}>&#9776;</div>
        </div>
    )
}

export default Header