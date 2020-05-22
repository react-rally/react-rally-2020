import React from 'react';
import About from 'components/About';
import Person from 'components/Person';
import shuffle from 'helpers/shuffle';

import OrganizerData from '../../../api/organizers';

export default () => {
  return (
    <div className="About">
      <About />
      <section>
        <h2>Attendee Experience</h2>
        <p>
          Due to COVID-19 React Rally 2020 will be held in CYBERSPACE!
          Just because we can't meet in person, doesn't mean we can't get together, learn, and have fun.
          As an attendee you will enjoy a full day of online talks by handpicked speakers.
          Beyond the talks we will have a morning yoga class,
          instructions on how to prepare gourmet coffee,
          live music performances, and so much more!
        </p>
      </section>
      <section>
        <h2>Organizers</h2>
        <div className="align-center">
          {shuffle(Object.keys(OrganizerData)).map(key => {
            return <Person {...OrganizerData[key]} key={key} />;
          })}
        </div>
      </section>
      <section>
        <h2>Past Conferences</h2>
        <p>
          We've been having fun, learning, and sharing together for a few years
          now. Here's a look at our past years:
        </p>
        <ul className="link-list">
          <li>
            <a href="https://2015.reactrally.com/" target="_blank">
              2015
            </a>
          </li>
          <li>
            <a href="https://2016.reactrally.com/" target="_blank">
              2016
            </a>
          </li>
          <li>
            <a href="https://2017.reactrally.com/" target="_blank">
              2017
            </a>
          </li>
          <li>
            <a href="https://2018.reactrally.com/" target="_blank">
              2018
            </a>
          </li>
          <li>
            <a href="https://2019.reactrally.com/" target="_blank">
              2019
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
