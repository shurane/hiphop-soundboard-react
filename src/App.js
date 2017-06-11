import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// https://stackoverflow.com/a/1484514
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// TODO go to ES6
function getHolderUrl(text) {
  return "holder.js/150x100" +
    "?bg=" + getRandomColor() +
    "&text=" + text;
}

function playClip(source){
  var audio = new Audio(source);
  audio.play();
}

const clips = [
  {
    file : "clips/beastieboys_anotherdimension.mp3",
    name : "Beastie Boys - Another Dimension"
  }, {
    file : "clips/beastieboys_intergalactic.mp3",
    name : "Beastie Boys - Intergalactic"
  }, {
    file : "clips/beastieboys_planetary.mp3",
    name : "Beastie Boys - Planetary"
  }, {
    file : "clips/biggie_biggie3.mp3",
    name : "Notorious B.I.G. - Biggie x3"
  }, {
    file : "clips/biggie_cantyousee.mp3",
    name : "Notorious B.I.G. - Can't you see"
  }, {
    file : "clips/biggie_hypnotize1.mp3",
    name : "Notorious B.I.G. - Hypnotize1"
  }, {
    file : "clips/biggie_hypnotize2.mp3",
    name : "Notorious B.I.G. - Hypnotize2"
  }, {
    file : "clips/biggie_UHHH.mp3",
    name : "Notorious B.I.G. - UHHH"
  }, {
    file : "clips/dmx_xgongiveittoya.mp3",
    name : "DMX - X Gon Giv It To Ya"
  }, {
    file : "clips/drake_bestievahad.mp3",
    name : "Drake - Best I Ever Had"
  }, {
    file : "clips/drake_startedfromthebottom.mp3",
    name : "Drake - Started From the Bottom"
  }, {
    file : "clips/drake_udabest.mp3",
    name : "Drake - U Da ****in Best"
  }, {
    file : "clips/drdre_california.mp3",
    name : "Dr Dre - California"
  }, {
    file : "clips/icecube_7need11.mp3",
    name : "Ice Cube - 7 need 11"
  }, {
    file : "clips/icecube_shakeemup.mp3",
    name : "Ice Cube - Shake Em Up"
  }, {
    file : "clips/icecube_sodeep.mp3",
    name : "Ice Cube - So Deep"
  }, {
    file : "clips/icecube_todaywasagoodday.mp3",
    name : "Ice Cube - Today Was A Good Day"
  }, {
    file : "clips/icecube_tripledouble.mp3",
    name : "Ice Cube - Triple Double"
  }, {
    file : "clips/kanye_haaaaay.mp3",
    name : "Kanye West - Haaaayy"
  }, {
    file : "clips/kanye_power.mp3",
    name : "Kanye West - Power"
  }, {
    file : "clips/kendrick_nobodypray.mp3",
    name : "Kendrick Lamar - Nobody Pray"
  }, {
    file : "clips/kendrick_phrase2.mp3",
    name : "Kendrick Lamar - Phrase 2"
  }, {
    file : "clips/kendrick_waaaay.mp3",
    name : "Kendrick Lamar - Waaaaayy"
  }, {
    file : "clips/kendrick_yeayea.mp3",
    name : "Kendrick Lamar - Yea Yea"
  }, {
    file : "clips/missyelliot_geturfreakon.mp3",
    name : "Missy Elliot - Get Ur Freak On"
  }, {
    file : "clips/missyelliot_hollah.mp3",
    name : "Missy Elliot - Hollah"
  }, {
    file : "clips/psy_eyyysexylady.mp3",
    name : "PSY - EYYYYY SEXY LADY"
  }, {
    file : "clips/psy_koreanphrase.mp3",
    name : "PSY - Korean Phrase"
  }, {
    file : "clips/psy_opagangnamstyle.mp3",
    name : "PSY - Opa Gangnam Style"
  }, {
    file : "clips/sugarhillgang_bassgroove1.mp3",
    name : "Sugar Hill Gang - Bass Groove 1"
  }, {
    file : "clips/sugarhillgang_bassgroove2.mp3",
    name : "Sugar Hill Gang - Bass Groove 2"
  }, {
    file : "clips/sugarhillgang_bassgroove3.mp3",
    name : "Sugar Hill Gang - Bass Groove 3"
  }, {
    file : "clips/sugarhillgang_hiphop.mp3",
    name : "Sugar Hill Gang - Hip Hop"
  }, {
    file : "clips/wutang_cashrules.mp3",
    name : "Wu Tang Clan - Cash Rules"
  }, {
    file : "clips/wutang_cream.mp3",
    name : "Wu Tang Clan - CREAM"
  }, {
    file : "clips/wutang_dolladollabill.mp3",
    name : "Wu Tang Clan - Dolla Dolla Bill"
  }
];

class SoundItem extends Component {
  // TODO should we use state?
  render() {
    return (
      <div className="grid-item" onClick={() => playClip(this.props.clip.file)}>
        <img data-src={getHolderUrl(this.props.clip.name)}/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const items = clips.map((clip) =>
      <SoundItem clip={clip}/>
    );

    return (
      <div className="grid">
        {items}
      </div>
    );
  }
}

export default App;
