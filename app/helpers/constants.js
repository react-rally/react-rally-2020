const constants = {};
export default constants;

constants.Links = {
  CODE_OF_CONDUCT: 'http://confcodeofconduct.com/',
  CODE_OF_CONDUCT_FORM: '',
  EMAIL_ORGANIZERS: 'team@reactrally.com',
  TICKET_SALES: 'https://ti.to/trace-events/react-rally-2020',
  PROPOSAL_FORM: 'http://speak.reactrally.com/events/react-rally-2020',
  HOTEL_RESERVATION:
    'https://www.marriott.com/event-reservations/reservation-link.mi?id=1571178610356&key=GRP&app=resvlink',
  VENUE_DIRECTIONS: 'https://goo.gl/maps/V1kpixDA8DF2',
  PARTY_DIRECTIONS: 'https://goo.gl/maps/AeYKJrkAFZG2',
  LIVE_STREAM_PLACEHOLDER: 'https://www.youtube.com/embed/5NNOrp_83RU',
  LIVE_STREAM_DAY_ONE: 'https://www.youtube.com/embed/IRSjD2A1VuA',
  LIVE_STREAM_OVER: 'https://www.youtube.com/embed/T1XgFsitnQw',
  YOUTUBE_CHANNEL:
    'https://www.youtube.com/playlist?list=PLUD4kD-wL_zYSfU3tIYsb4WqfFQzO_EjQ',
  SPONSOR_PROSPECTUS: 'docs/sponsor.pdf',
  OPPORTUNITY_SCHOLARSHIP_FORM:
    'https://docs.google.com/forms/d/e/1FAIpQLSevXCteBpBysq8afjuHQuFL4sx3OUv3o2iIciQ6sMCfCk12uw/viewform',
  REPORT_COC_VIOLATION_FORM: 'https://docs.google.com/forms/d/e/1FAIpQLScghazbFL90gtVbWjlE2BxwXGuV-S1IIXGyXqeU9lyLAA7NmQ/viewform',
};

constants.Prices = {
  HOTEL_RATE: 174,
};

constants.Dates = {
  CFP_OPEN: '2020-01-01T06:00:00-00:00',
  CFP_CLOSE: '2020-01-01T06:00:00-00:00',
  TICKET_RELEASE: '2020-01-01T18:00:00-00:00',
  CONF_DAY_ONE: '2020-08-14T06:00:00-00:00',
  CONF_DAY_TWO: '2020-08-14T06:00:00-00:00',
  HOTEL_DISCOUNT: '2020-01-01T06:00:00-00:00',
  OPPORTUNITY_SCHOLARSHIP_OPEN: '2020-01-01T06:00:00-00:00',
  OPPORTUNITY_SCHOLARSHIP_CLOSE: '2020-01-01T06:00:00-00:00',
};

constants.FeatureSets = {};
constants.FeatureSets.Sponsors = {
  features: [
    { id: 0, name: 'Logo on conference website' },
    { id: 1, name: 'Logo on slide between talks' },
    { id: 2, name: 'Personal channel to chat with attendees' },
    { id: 3, name: 'Digital swag sent to attendees' },
    { id: 4, name: 'Commercial spot shown during breaks' },
    { id: 5, name: 'Sponsor a break' }
  ],
  levels: [
    { name: 'Silver', price: 3000, features: [0, 1] },
    { name: 'Gold', price: 5000, features: [0, 1, 2, 3] },
    { name: 'Platinum', price: 7500, features: [0, 1, 2, 3, 4, 5] }
  ]
};
