import React from 'react';
import {Redirect} from 'react-router-dom';
import {Tabs, Tab} from 'react-bootstrap';
import {ABOUT_STEPTHROUGH, PEDAGOGY, ROADMAP} from './text';
import './styles.css'

function About(props) {
    return (
        <div className="contentsPane">
            {ABOUT_STEPTHROUGH}
        </div>
    );
}

function Pedagogy(props) {
    return (
        <div className="contentsPane">
            {PEDAGOGY}
        </div>
    );
}

function RoadMap(props) {
    return (
        <div className="contentsPane">
            {ROADMAP}
        </div>
    );
}

function SplashPage() {

    return (
        <div className="mainContents">
            <h1 className="text-center">
                StepThrough
            </h1>
            <br />
            <Tabs fill defaultActiveKey="about" mountOnEnter>
                <Tab eventKey="about" title="About">
                    <About />
                </Tab>
                <Tab eventKey="pedagogy" title="Pedagogy">
                    <Pedagogy />
                </Tab>
                <Tab eventKey="roadmap" title="RoadMap">
                    <RoadMap />
                </Tab>
                <Tab eventKey="start" title="Start Learning" className="redirect">
                    <Redirect to="/errormessages" />
                </Tab>
            </Tabs>
        </div>
    );
}


export default SplashPage;
