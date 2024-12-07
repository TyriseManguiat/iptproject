import React, { useState } from 'react';
import './basicdiarystyle8.css';

function Diary() {
  const [sideNavWidth, setSideNavWidth] = useState('0');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [diaryBackgroundColor, setDiaryBackgroundColor] = useState('#ffffff');

  const openNav = (navId) => setSideNavWidth(navId === 1 ? '1243px' : '0');
  const closeNav = () => setSideNavWidth('0');

  const changeBodyBg = (imgUrl) => {
    document.body.style.backgroundImage = `url(${imgUrl})`;
    document.body.style.backgroundSize = '1000px 1000px';
  };

  const changeBgColor = (color) => {
    setBackgroundColor(color);
    document.body.style.background = color;
  };

  const changeFont = (font) => {
    setFontFamily(font);
  };

  const changeDiaryBg = (color) => {
    setDiaryBackgroundColor(color);
    document.getElementById('mydiary').style.backgroundColor = color;
  };

  return (
    <div>
      <div className="buttons">
        <button type="button" className="class1" onClick={() => openNav(1)}>CUSTOM</button><br />
        <button type="button" className="class2" onClick={() => openNav(2)}>BACKGROUND COLOR</button><br />
        <button type="button" className="class3" onClick={() => openNav(3)}>FONT</button><br />
        <button type="button" className="class4" onClick={() => openNav(4)}>DIARY BACKGROUND COLOR</button><br />
        <button type="button" className="class5">BACK</button><br />
      </div>

      <div id="mySidenav1" className="sidenav" style={{ width: sideNavWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <button type="button" className="background1" onClick={() => changeBodyBg('bg2.jpg')}><img src="bg2.jpg" alt="Background 2" /></button>
        <button type="button" className="background1" onClick={() => changeBodyBg('bg3.jpg')}><img src="bg3.jpg" alt="Background 3" /></button>
        <button type="button" className="background1" onClick={() => changeBodyBg('bg4.jpg')}><img src="bg4.jpg" alt="Background 4" /></button>
        {/* Add more images as needed */}
      </div>

      <div id="mySidenav2" className="sidenav" style={{ width: sideNavWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <button type="button" style={{ backgroundColor: '#ccddff' }} onClick={() => changeBgColor('#ccddff')}></button>
        <button type="button" style={{ backgroundColor: '#99bbff' }} onClick={() => changeBgColor('#99bbff')}></button>
        <button type="button" style={{ backgroundColor: '#80aaff' }} onClick={() => changeBgColor('#80aaff')}></button>
        {/* Add more colors as needed */}
      </div>

      <div id="mySidenav3" className="sidenav" style={{ width: sideNavWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <button type="button" style={{ backgroundColor: '#ecc6ec' }} onClick={() => changeDiaryBg('#ecc6ec')}></button>
        <button type="button" style={{ backgroundColor: '#df9fdf' }} onClick={() => changeDiaryBg('#df9fdf')}></button>
        <button type="button" style={{ backgroundColor: '#d98cd9' }} onClick={() => changeDiaryBg('#d98cd9')}></button>
        {/* Add more diary background colors as needed */}
      </div>

      <div id="mySidenav4" className="sidenav" style={{ width: sideNavWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <button type="button" className="font1" onClick={() => changeFont('Times New Roman')}>Times New Roman</button>
        <button type="button" className="font2" onClick={() => changeFont('Impact')}>Impact</button>
        <button type="button" className="font3" onClick={() => changeFont('Verdana')}>Verdana</button>
        {/* Add more font styles as needed */}
      </div>

      <div id="mydiary" style={{ fontFamily: fontFamily, backgroundColor: diaryBackgroundColor }}>
        {/* Your diary content goes here */}
      </div>
    </div>
  );
}

export default Diary;
