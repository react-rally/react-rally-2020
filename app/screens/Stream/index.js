import React from 'react';
import constants from 'helpers/constants';
import {getLiveStreamEmbedURL} from 'helpers/livestream';

export default () => {
  let url = getLiveStreamEmbedURL();

  return (
    <div className="Stream">
      <iframe
        className="Stream__Embedded"
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <div className="Stream__Caption">
        <img src="assets/dist/img/ReactLogoRed.svg" width="42" />
        <h2>React Rally 2020 Live Stream</h2>
      </div>
      <section className="Stream__Legal">
        The content of React Rally Live Stream is owned solely by the speakers, presenters, musicians, and instructors who have created and recorded the material presented.
        Recording, recreating, or redistributing any content without the explicit consent of the owner is expressly forbidden.
      </section>
    </div>
  );
};
