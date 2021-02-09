import Layout from '../components/CommonLayout' //This has the nav bar component on it and the global styles
const makealive = require('../utils/livencharacters');


const Home = () => (//This has a title image
    <Layout>
        <div className=" content container-fluid" id="homeContent">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-6 introGreeting">
                    <h1>
                        <span className="hyperactiveCharacters">H</span>
                        <span className="lazyCharacters">i</span>
                        <span className="first-letter movingCharacters">,</span>
                    </h1>
                    <h1>
                        <span className="hyperactiveCharacters">I</span>
                        <span className="first-letter movingCharacters">'</span>
                        <span className="lazyCharacters">m</span>
                        <span className="movingCharacters"> </span>
                        <span className="first-letter hyperactiveCharacters">I</span>
                        <span className="movingCharacters">v</span>
                        <span className="lazyCharacters">a</span>
                        <span className="movingCharacters">n</span>
                    </h1>
                    <p>
                        <i>{makealive("Software Developer, Entrepreneur, Sports Enthusiast.")}</i>
                    </p>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    </Layout>
);

export default Home