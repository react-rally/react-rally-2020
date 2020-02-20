import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import constants from 'helpers/constants';
import shuffle from 'helpers/shuffle';
import About from 'components/About';
import Person from 'components/Person';
import SpeakerData from '../../../api/speakers';
import Tickets from '../../../api/tickets';

import UpcomingDate from './UpcomingDate'
import TicketCard from './TicketCard'

const {Dates} = constants;

export default () => {
  return (
    <div className="Home">
      <section className="Home__About">
        <h2>What is React Rally?</h2>
        <About />
        <Link to="/about" className="Link">
          More about React Rally &raquo;
        </Link>
      </section>

      {Object.keys(SpeakerData).length > 0 ? (
        <section>
          <h2>Featured Speakers</h2>
          <div className="align-center">
            {shuffle(Object.keys(SpeakerData))
              .filter(key => SpeakerData[key].featured)
              .map(key => {
                return <Person {...SpeakerData[key]} key={key} />;
              })}
          </div>
          <Link to="/speakers" className="Link">
            See All the Speakers &raquo;
          </Link>
        </section>
      ) : null}

      <section>
        <h2>Upcoming Dates</h2>
        <UpcomingDate
          timestamp={Dates.CFP_OPEN}
          description="Call for Proposals opens."
        />
        <UpcomingDate
          timestamp={Dates.CFP_CLOSE}
          description="Call for Proposals closes."
        />
        <UpcomingDate
          timestamp={Dates.TICKET_RELEASE}
          description="Early Bird Tickets (round one) go on sale."
        />
        <UpcomingDate
          timestamp={moment.utc(Dates.TICKET_RELEASE).add(7, 'days')}
          description="Early Bird Tickets (round two) go on sale."
        />
        <UpcomingDate
          timestamp={moment.utc(Dates.TICKET_RELEASE).add(14, 'days')}
          description="Standard tickets go on sale."
        />
      </section>

      {moment.utc().isAfter(Dates.TICKET_RELEASE) ? (
        <section>
          <h2>Tickets</h2>
          {Tickets.map((t, i) => {
            return <TicketCard key={i} {...t} />;
          })}
        </section>
      ) : null}
    </div>
  );
};
