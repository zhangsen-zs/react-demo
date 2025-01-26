// import '../css/style.css';
//import {useState} from 'react';
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';

function MyProcess() {
  return (
    <div className="myProcess">
      <img className="img" src="images/01.jpg" alt="示例图片"/>
      <div class="topnav">
        <button className="Fistpage">网站首页</button>
        <button className="Process">成长历程</button>
        <button className="Town">我的家乡</button>
        <button className="School">我的学校</button>
        <button className="Food">喜欢美食</button>
        <button className="Message">给我留言</button>
      </div>

      <div className="title">
       <div className="circle-text">
        <div className="black-circle"></div>
        <span className="title-message">给我留言</span>
       </div>
       <hr className="dotted-line"/>
      </div>
    </div>
  );
}
export default MyProcess;