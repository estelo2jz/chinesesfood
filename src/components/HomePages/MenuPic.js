import React from 'react';

import Beefbrotwo from '../../images/lunch/beefbro.jpg';
import FriedWingstwo from '../../images/appetizers/friedwings.jpg';
import Peppertwo from '../../images/beef/peppersteak.jpg';
import Mootwo from '../../images/chicken/moogoo.jpg';
import Chickenchoptwo from '../../images/chop/chickenchop.jpg';
import Roastfootwo from '../../images/foo/roastfoo.jpg';
import Shrimpmaitwo from '../../images/mai/shrimpmai.jpg';
import Eggsouptwo from '../../images/soup/egg.jpg';
import Garlictwo from '../../images/vege/garlic.jpg';

function MenuPic() {
  return (
    <div className="menu-pic-container">
      <div className="menu-grid-container">
        <div>
          <img src={Beefbrotwo} />
        </div>
        <div>
          <img src={FriedWingstwo} />
        </div>
        <div>
          <img src={Peppertwo} />
        </div>
        <div>
          <img src={Mootwo} />
        </div>
        <div>
          <img src={Chickenchoptwo} />
        </div>
        <div>
          <img src={Roastfootwo} />
        </div>
        <div>
          <img src={Shrimpmaitwo} />
        </div>
        <div>
          <img src={Eggsouptwo} />
        </div>
        <div>
          <img src={Garlictwo} />
        </div>
      </div>
    </div>
  )
}

export default MenuPic
