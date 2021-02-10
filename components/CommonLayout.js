import Header from './Header'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import NProgress from 'nprogress'
import { initGA, logPageView } from '../utils/analytics'


Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
    componentDidMount () {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }


    render () {

        let d = new Date();
    
        return(
            <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <title>Ivan Portfolio</title>
                <link rel="icon" href="/static/images/logoIcon.svg"></link>            
            </Head>
                <div>
                    <Header />
                    <div className="background">
                        {/* <Image
                        layout="fill"
                        className="object-center object-cover pointer-events-none"
                        src="/static/images/wallpaper.jpg"
                        alt="wallpaper"
                        /> */}
                        <div id="attributes">
                            <footer> <small>&copy; Copyright {d.getFullYear()}, Ivan Johannes</small> </footer>
                            <div><small>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small></div>
                        </div>
                    </div>
                    {this.props.children}
                    <style global jsx>{`
    
                        body *::selection {
                            color: black;
                            text-shadow: rgb(255, 0, 0, 0.3);
                            background: rgb(255, 0, 0, 0.3);
                        }
    
                        #attributes {
                            position: fixed;
                            z-index: 4;
                            bottom: 1vh;
                            right: 1vw;
                            color: rgb(70, 60, 60);
                        }
    
                        #attributes a {
                            color: inherit
                        }
    
                        #attributes:hover {
                            color: white;
                        }
    
                        .background {
                            width: 100vw;
                            height: 100vh;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-image: linear-gradient(to right, rgb(62, 62, 62), rgb(80, 80, 80), rgb(62, 62, 62), rgb(70, 60, 60));
                        }
    
                        .movingCharacters:hover {
                            position:relative;
                            top:-0.3em;
                            text-shadow:10px 10px 25px black;
                            transition:0s
                        }
    
                        .hyperactiveCharacters:hover {
                            position:relative;
                            top:-0.5em;
                            text-shadow:10px 10px 25px black;
                            transition:0s
                        }
    
                        .lazyCharacters:hover {
                            position:relative;
                            top:-0.1em;
                            text-shadow:10px 10px 25px black;
                            transition:0s
                        }
    
                        #MainNav {
                            background-color: black;
                            height: 100vh;
                            width: auto;
                            position: fixed;
                            z-index: 1;
                            top: 0;
                            left: 0;
                        }
    
                        #menuButton {
                            display:none;
                            font-size: 8vmin;
                            color: white;
                            position: fixed;
                            top:2vmax;
                            left: 2vmax;
                            z-index: 1;
                            cursor: pointer;
                        }
    
                        #menuButton:hover {
                            font-size: 8.5vmin;
                            color: rgb(255, 0, 0, 0.6);
                            transition: 0.3s;
                        }
    
                        #logo {
                            width: 8vh;
                            height: 8vh;
                            margin:auto;
                            margin-top: 2vh;
                            margin-bottom: 26vh;
                        }
    
                        #logo:hover {
                            width: 9vh;
                            cursor: pointer;
                            transition: 0.5s;
                        }
    
                        #headerLogo {
                            width: 100%;
                            padding: 0.5vh;
                            padding-bottom: 0;
                        }
    
                        .navLinks {
                            color: white;
                            font-size: medium;
                            min-width: 12vmin;
                            display: block;
                            padding-right: 2vmin;
                            padding-left: 2vmin;
                            padding-bottom: 5vh;
                            text-align: center;
                        }
    
                        .navLinks:hover {
                            color: rgb(255, 0, 0, 0.6);
                            transition: 0.3s;
                        }
    
                        #externalLinks {
                            height: 20vh;
                            width: 8vh;
                            margin: auto;
                            margin-top: 18vh;
                        }
    
                        .externalLinks {
                            width: 50%;
                            display: block;
                            opacity: 0.7;
                            margin:auto;
                            margin-bottom:2vh;
                        }
    
                        .externalLinks:hover {
                            width: 60%;
                            transition: 0.5s;
                        }
    
                        @media screen and (max-width: 600px) {
                            #MainNav {display: none;}
                            #menuButton {display: inline;position:fixed}
                            #headerRow {display: none;}
                            .hideContent {display: none;}
                            #externalLinks {margin-top: 10vh;}
                            #contactForm {max-width: 90%; margin:auto;}
                            .projects {font-size: 2vmin; max-width: 90%; margin:auto;}
                            #aboutMePic {opacity: 0.7; min-width:80vw;}
                        }
    
                        #contactMe {
                            z-index: 3;
                        }
    
                        .first-letter {
                            color: rgb(255, 0, 0, 0.6);
                        }
    
                        .introGreeting {
                            margin-top:20vh; 
                        }
    
                        .introGreeting h1,
                        #projectsIntro h1 {
                            font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
                            font-size: 8vw;
                            color: white;
                        }
    
                        .introGreeting h1 {
                            margin-left:15vmin;
                        }
    
                        .introGreeting p,
                        #projectsIntro p {
                            font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
                            font-size: 2vw;
                            color: rgb(255, 0, 0, 0.6);
                        }
    
                        .introGreeting p {
                            margin-left:15vmin;
                        }
    
                        #aboutMe,
                        #contactMe {
                            padding-top: 15vh;
                            color: white;
                            font-size:2vmin;
                        }
    
                        #projects {
                            padding-top: 10vh;             
                        }
    
                        .projects {
                            background-color: grey;
                            border-radius: 1vh;
                            height: 6vh;
                            padding-top:2vh;
                            margin-bottom: 10px;
                            color: white;
                            font-size: 1.5vmin;
                            position: relative;
                        }
    
                        .projects a {
                            color: rgb(255, 0, 0, 0.6);
                        }
    
                        .projects a:hover {
                            color: rgb(255, 0, 0, 0.6);
                            transition: 0.3s;
                        }
    
                        .projects:hover {
                            background-color: rgb(255, 0, 0, 0.2);
                            transition: 0.3s;
                            box-shadow: 0px 0px 8px 2px rgb(0, 0, 0, 0.4);
                        }
    
                        #headerRow {
                            color: white;
                        }
    
                        #aboutMe h1,
                        #contactMe h1 {
                            font-size: 8vmin;
                            font-weight: bold;
                        }
    
                        #aboutMePic {
                            width: 50vw;
                            position: fixed;
                            bottom: 0vh;
                            right: 5vh;
                            z-index: 1;
                        }
    
                        #timeline_img {
                            width: 70%;
                            border-radius: 1vh;
                            opacity: 0.1;
                            z-index: 2;
                        }
    
                        #timeline_img:hover {
                            width: 75%;
                            opacity: 0.7;
                            transition: 0.5s;
                            box-shadow: 0px 0px 8px 4px rgb(0, 0, 0, 0.4);
                        }
    
                        .halfInput,
                        .fullInput {
                            background-color: rgb(93, 93, 93);
                            border: solid 5px rgb(93, 93, 93, 0)
                        }
    
                        #contactForm .row {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 0.8vw;
                            font-size: small;
                            line-height: 3em;
                        }
    
                        #contactForm input:hover,
                        #contactForm textarea:hover {
                            background-color: rgb(255, 0, 0, 0.4);
                            transition: 0.3s;
                        }
    
                        #contactForm input:focus,
                        #contactForm textarea:focus {
                            background-color: rgb(100, 75, 75, 0.4);
                            outline: none;
                            font-size: medium;
                            box-shadow: 0px 0px 8px 2px rgb(0, 0, 0, 0.4);
                        }
    
                        #contactForm textarea {
                            height: 20vh;
                        }
    
                        #submit {
                            width: 10vw;
                            border-radius: 3px;
                            border: solid 2px rgb(255, 0, 0, 0.6);
                            background-color: rgb(255, 0, 0, 0.0);
                            color: rgb(255, 0, 0, 0.6);
                            font-size: 2vmin;
                            font-weight:bold;
                        }
    
                        #submit:hover {
                            background-color: rgb(255, 0, 0);
                            color: rgb(93, 93, 93);
                            transition: 0.3s;
                        }
    
                        #submit:active {
                            border-radius: 3px;
                            border: 2px solid rgb(255, 0, 0, 0.4);
                            background-color: rgb(255, 0, 0, 0.4);
                            color: rgb(93, 93, 93)                        
                        }
    
                        #contactImage {
                            opacity: 0.2;
                            width: 60%;
                            margin: auto;
                        }
    
                        .halfInput {
                            width: 49%;
                        }
    
                        .fullInput {
                            width: 100%
                        }
    
                    `}
                    </style>
                </div>
            </div>
        )
    }
}

export default Layout