// import '../css/style.css';
//import {useState} from 'react';
//import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';

function MyMessage() {
  return (
    <div className="myMessage">
      <div className="title">
       <div className="circle-text">
        <div className="black-circle"></div>
        <span className="title-message">给我留言</span>
       </div>
       <hr className="dotted-line"/>
      </div>

      <div className="content">
        <div className="item">
          <div className="content-title">你的姓名：</div>
          <input className="inputnamepwd"></input>
          <span className="red-text">（最大可以输入10位）</span>
        </div>

        <div className="item">
          <div className="content-title">你的密码：</div>
          <input className="inputnamepwd"></input>
          <span className="red-text">（最大可以输入6位）</span>
        </div>
        
        <div className="item"> 
          <div className="content-title">你的性别：</div>
          <input className="radio" type="radio"></input> 男 <input className="radio" type="radio"></input> 女
        </div>

        <div className="item">
          <div className="content-title">你的年龄：</div>
          <select className="age"  defaultValue="18岁以下">
          <option value="male">18岁以下</option>
          <option value="female">18-65岁</option>
          <option value="other">65岁以上</option>
          </select>
        </div>

        <div className="item">
          <div className="content-title">你的爱好:</div>
          <label className="checkbox">
           <input type="checkbox" name="hobby" value="singing"/>
           <span>唱歌</span>
          </label>
          <label className="checkbox">
           <input type="checkbox" name="hobby" value="travel"/>
           <span>旅游</span>
          </label>
          <label className="checkbox">
           <input type="checkbox" name="hobby" value="internet"/>
           <span>上网</span>
          </label>
          <label className="checkbox">
           <input type="checkbox" name="hobby" value="friends"/>
           <span>交友</span>
          </label>
        </div>

        <div className="content-message"> 
          <div className="content-title">给我留言:</div>  
          <textarea className="text"></textarea>
          <span className="text-red-center"><span className="red-text">（最大可以输入300文字）</span></span>
        </div>

        <button className="submit">提交</button>
      </div>
   
    </div>
  );
}

export default MyMessage;
