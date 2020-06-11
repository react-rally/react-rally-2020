import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    const container = document.getElementById('container');

    container.classList.add('fullscreen');

    return () => container.classList.remove('fullscreen');
  }, [])

  return (
    <div className="BlackLivesMatter">
      <section>
        <h1>Black Lives Matter ✊🏽✊🏾✊🏿</h1>
        <p>
          We are both heartbroken and outraged at the murder of George Floyd. Too many black lives have ended at the hands of those who are meant to serve and protect our communities. There is no place for this kind of hate or bigotry in the world. We stand in solidarity with the black community. We stand with those who are protesting for justice and police reform throughout the country. We stand with those who are oppressed for the color of their skin. We stand for racial equality. We stand with black lives because black lives matter.
        </p>
        <p>– Matt & Jamison</p>
      </section>
    </div>
  )
};
