import React from 'react';
import { Parallax } from 'react-parallax';
import './Header.css';

const Header = ({ bride, groom }) => {
  return (
    <Parallax bgImage="/doi1.jpg" strength={500}>
      <header className="wedding-header">
        <div className="header-content">
          <div className="image-container">
            <img src={bride.image} alt="Bride" className="bride-img" />
          </div>
          <div className="wedding-announcement">
            <p>Trân trọng báo tin</p>
            <h2>Lễ Thành Hôn & Vu Quy của chúng tôi</h2>
            <h1>{groom.name}<br /> & <br /> {bride.name}</h1>
            <h4 className='vuquy'>HÔN LỄ ĐƯỢC HÀNH CỬ TẠI TÂN GIA <b>NỮ</b><br/> VÀO LÚC 16H30</h4>
            <h3 className='location_groom'>Tại nhà hàng Lang Châu</h3>
            <h5 className="wedding-date">16.10.2024</h5>
            <h4 className='vuquy'>HÔN LỄ ĐƯỢC HÀNH CỬ TẠI TÂN GIA <b>NAM</b><br/> VÀO LÚC 9H30</h4>
            <h3 className='location_groom'>Tại đường Dương 10, thôn Dương Sơn, xã Hòa Châu, <br/>huyện Hòa Vang, TP.Đà Nẵng</h3>
            <h5 className="wedding-date">19.10.2024</h5>
            <p><b>Sự hiện diện của quý khách là niềm vinh hạnh <br/>của gia đình chúng tôi</b></p>
          </div>
          <div className="image-container">
            <img src={groom.image} alt="Groom" className="groom-img" />
          </div>
        </div>
      </header>
    </Parallax>
  );
};

export default Header;
