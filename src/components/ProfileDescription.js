import React from 'react';
import Content from '../elements/Content';


const ProfileDescription = () => (
  <Content>
    <p>Hey there! I'm <span>Mark</span>, a Front-End Developer living in Toronto.</p>
    <p>
            I work to create accessible, fluid, and beautiful websites and web applications.
            After getting a glimpse of programming with Javascript in a previous career, I was immediately smitten.
            Since then, writing code has become not only my favorite pastime,
            but also my career, and I couldn't be happier.
    </p>
    <p>
            Javascript might be my favorite thing in the world,
            and when I’m not building awesome websites with it there is a good chance you will find me using it
            to program tiny robots to take over the world over at <a href="https://screeps.com/">Screeps.com</a>.
            When I’m not at my computer, I’m almost certainly out hiking with my dog, or volunteering at the local shelter.
    </p>
    <p>
            If you would like to work together,
            drop me a line at <a href="mailto:contactme@markwilkins.co?Subject=Hello!">contactme@markwilkins.co</a>.
    </p>
    <p>I hope to hear from you!</p>
    <p>
      <span>Skills:</span> React.js, HTML5, Javascript (+ES6), JQuery, CSS3, APIs, Responsive Development, Web Accessibility
    </p>
    <p>
      <span>Tools:</span> Git &amp; GitHub, Gulp, Sass, Sublime Text 3, Atom.io, Firebase, Command Line, Node.js &amp; NPM
    </p>
  </Content>
);

export default ProfileDescription;
