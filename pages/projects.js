import Layout from '../components/CommonLayout'
import Link from 'next/link'
const makealive = require('../utils/livencharacters');

const projectItems = [//Projects as they could be imported from  a DB
    {
        "name":"Apple Content Manager",
        "link":"https://apple-content-manager.herokuapp.com/",
        "linkType":"HEROKU",
        "description":"Express and React capstone project for HyperionDev Bootcamp. Deployed to Heroku. No DB. Testing Express backend coupled with React frontend",
        "date_completed":"2021-01-22"
    },
    {
        "name":"Mine Sweeper",
        "link":"https://minensuchboot.herokuapp.com/",
        "linkType":"HEROKU",
        "description":"React capstone project for HyperionDev Bootcamp. Deployed to Heroku. No DB. Testing React Skills without a backend.",
        "date_completed":"2021-10-21"
    },
    {
        "name":"On The Line Website Task",
        "link":"https://github.com/IvanJoh/onTheLineWebsite-Task",
        "linkType":"GITHUB",
        "description":"HTML, CSS and JS capstone project for HyperionDev Bootcamp. Pushed to GitHub. Portaying some js logic to handle a shopping cart.",
        "date_completed":"2021-10-21"
    }
]

const expandData = (name) => {
    var x = document.getElementById(name);
    
    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var project = projectItems.filter(item => {
        return item.name === name;
    })[0];
    if (x.style.height === "20vh") {
        document.getElementById(name).firstChild.innerHTML = cutString(project.name, 8);
        document.getElementById(name).firstChild.nextSibling.innerHTML = cutString(project.description, 25);
        if (width <= 600) {
            document.getElementById(name).firstChild.nextSibling.style.display = "none";
            document.getElementById(name).firstChild.nextSibling.nextSibling.nextSibling.style.display = "none";
        };
        document.getElementById(name).style.height = "6vh";
    } else {
        document.getElementById(name).firstChild.innerHTML = project.name;
        document.getElementById(name).firstChild.nextSibling.innerHTML = project.description;
        document.getElementById(name).firstChild.nextSibling.style.display = "inline";
        document.getElementById(name).firstChild.nextSibling.nextSibling.nextSibling.style.display = "inline";
        document.getElementById(name).style.height = "20vh";
    }
}

const cutString = (string, length) => {
    return string.length > length ? string.substring(0,length)+"..." : string
}

const Projects = () => {//Displays the projects neatly in rows

    const projects = projectItems.map((item) => {

        return (
            <div onClick={() => expandData(item.name)} id={item.name} key={item.name} className="row projects">
                <div className="col-sm-2">{cutString(item.name, 8)}</div>
                <div className="col-sm-5 hideContent">{cutString(item.description, 25)}</div>
                <div className="col-sm-3"><Link href={item.link}><a target="_blank">{item.linkType}</a></Link></div>
                <div className="col-sm-2 hideContent">{item.date_completed}</div>
            </div>
        )
    })

    return (
        <Layout>
            <div className="content" id="projects">
                <div className="container-fluid" id="projectsIntro">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h1>{makealive("Projects")}</h1>
                            <p>{makealive("Below is a list of some of the projects that I've worked on")}</p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <br />
                <div className="container-fluid" id="projectList">
                    <div className="row projectList">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8 container-fluid">
                            <div className="row"  id="headerRow">
                                <div className="col-sm-2">Name</div>
                                <div className="col-sm-5">Description</div>
                                <div className="col-sm-3">Link</div>
                                <div className="col-sm-2">Date</div>
                            </div>
                            {projects}
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects