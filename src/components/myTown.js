import '../css/style.css';
import {useState} from 'react';

function MyTown(){
  const [isPressed,setisPressed] = useState("1");

  const handlebutton = (value) => {
    return () => {
      setisPressed(value)
    }
  }

  return (
  <div className="MyTown">
     <div className="title">
        <div className="circle-text">
          <div className="black-circle"/>
          <span className="title-message">城市介绍</span>
          <span className="title-search">
            <input className='search-box' type="search" name="q" placeholder=""/>
            <button className='search-submit' type="submit">搜索</button>
          </span>
          </div>
        <hr className="dotted-line"/>
     </div>

     <p className='text'>
       丹东是中国海岸线的北端起点，是东北亚经济圈与环渤海、黄海经济圈的重要交汇点，是一个以工业、商贸、港口、物流、旅游为主体的沿江、沿海、沿边城市，是国家级边境合作区、全国沿边重点开发开放试验区、沿海开放城市，拥有港口、铁路、公路、管道、机场5种类型10处口岸，1处中朝边民互市贸易区，是中国对朝贸易最大的口岸城市、国家特许经营赴朝旅游城市。是亚洲唯一一个同时拥有边境口岸、机场、高铁、河港、海港、高速公路的城市，区域级流通节点城市。
     </p>

     <div className="title">
        <div className="circle-text">
          <div className="black-circle"/>
          <span className="title-message">名胜古迹</span>
          </div>
        <hr className="dotted-line"/>
     </div>

     <div className='pictures'>
        <div className="responsive">
          <div>
            <img className ="picture"src="images/02.jpg" alt="Forest" />
            <div className="text-bold">抗美援朝纪念馆</div>
            <div className="text-normal">抗美援朝运动历史的专题纪念馆</div>
          </div>
        </div>

        <div className="responsive">
          <div>
            <img className ="picture"src="images/03.jpg" alt="Forest" />
            <div className="text-bold">鸭绿江断桥</div>
            <div className="text-normal">抗美援朝沧桑历史的见证者</div>
          </div>
        </div>

        <div className="responsive">
          <div>
            <img className ="picture"src="images/04.jpg" alt="Forest" />
            <div className="text-bold">凤凰山</div>
            <div className="text-normal">贞观年间，唐太宗李世民游览此山</div>
          </div>
        </div>

        <div className="responsive">
          <div>
            <img className ="picture"src="images/05.jpg" alt="Forest" />
            <div className="text-bold">安东老街</div>
            <div className="text-normal">殖民时期的历史缩影</div>
          </div>
        </div>
     </div>

     <div className='buttons'>
        <button className='button-gray' >首页</button>
        <button className='button-gray' >上一页</button>
        <button className={isPressed ==="1" ? 'button-blue' : "button-other" } checked value="1" onClick={handlebutton("1")}>1</button>
        <button className={isPressed ==="2" ? 'button-blue' : "button-other" } value="2" onClick={handlebutton("2")}>2</button>
        <button className={isPressed ==="3" ? 'button-blue' : "button-other" } value="3" onClick={handlebutton("3")}>3</button>
        <button className={"button-other"} value="下一页" onClick={handlebutton("下一页")}>下一页</button>
        <button className={"button-other"} value="尾页" onClick={handlebutton("尾页")}>尾页</button>
     </div>
  </div>

  )
}

export default MyTown;