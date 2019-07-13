import React from 'react'
import Section from '../shared/Section'

const Intro = () => (
    <Section id="intro" className="parallax-window" data-parallax="scroll"
             data-image-src="http://placehold.it/1920x800">
        <div className="container">
            <ul className="element-scroll-parallax">
                <li data-parallax='{"y": 100}'><img src="/public/media/singer/intro-triangle.png" alt=""
                                                    className="img-responsive"/></li>
                <li data-parallax='{"y": -300}'>
                    <div className="my-info">
                        <h2 className="white">Hello</h2>
                        <h1 className="my-name">John Doe</h1>
                        <h3 className="white">I am a Singer</h3>
                    </div>
                </li>
            </ul>
        </div>
    </Section>
)
export default Intro
