import React, { Component } from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/Text.css';

export default class AnimatedText extends Component {
    render() {
        return (
            <ScrollAnimation animateIn='jackInTheBox'
                             animateOnce={true}
                             duration={0.5}
                             className='animatedText'
                             {...this.props}>
                {this.props.children}
            </ScrollAnimation>
        )
    }
}