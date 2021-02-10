import Layout from '../components/CommonLayout'
const makealive = require('../utils/livencharacters');

const showHideTimeline = () => {
    var x = document.getElementById("timeline_img");
    if (x.style.width === "90vw") {
        document.getElementById("timeline").firstChild.style.display = "inline-block";
        document.getElementById("timeline_img").style.width = "70%";
        document.getElementById("timeline_img").style.zIndex = 1;
        document.getElementById("timeline_img").style.position = "static";
        document.getElementById("timeline_img").style.opacity = 0.1;
        document.getElementById("timeline_img").style.boxShadow = "0px 0px 0px 0px grey";
        window.location.reload()
    } else {
        document.getElementById("timeline").firstChild.style.display = "none";
        document.getElementById("timeline_img").style.width = "90vw";
        document.getElementById("timeline_img").style.zIndex = 3;
        document.getElementById("timeline_img").style.position = "fixed";
        document.getElementById("timeline_img").style.top = "20vh";
        document.getElementById("timeline_img").style.left = "5vw";
        document.getElementById("timeline_img").style.opacity = 1;};
        document.getElementById("timeline_img").style.boxShadow = "0px 0px 20px 60px rgb(255, 0, 0, 0.4)";
}

const About = () => {//Some basic about me info inside p tags
    return (
        <Layout>
            <div className="content container-fluid" id="aboutMe">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-5">
                        <h1><span className="first-letter">{makealive("About me")}</span></h1>
                        <br />
                        <div>
                            Finance graduate undergoing career change since 2019 and constantly scouting for entrepreneurial ventures.<br /><br />
                            Passionate about computer science and its application to the real-world. 
                            Avid sportsman and keen musician with fine attention to detail. 
                            Fan of all literature and iconic comedies. 
                            Brother to a handful of siblings and son to a fantastic set of parents, family is critically important and therefore I prefer remote work.<br /><br />
                            Busily learning multiple different frameworks for software development and excited to apply them towards opening new businesses.
                            <br /><br />
                            <div id="timeline">
                                <span className="first-letter"><small>TIMELINE</small></span><br />
                                <img onClick={() => showHideTimeline()} id="timeline_img" src="/static/images/life_timeline.png" alt="timeline" />
                            </div>  
                        </div>
                    </div>
                    <div className="col-sm-5"><img src="/static/images/aboutMe.png" alt="aboutMe" id="aboutMePic" /></div>
                </div>
            </div>
        </Layout>
    )
}

export default About