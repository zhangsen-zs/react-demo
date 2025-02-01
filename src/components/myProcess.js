//import {useState} from 'react';

function MyProcess() {
  return (
    <div className="myProcess">
      <div className="title">
        <div className="circle-text">
          <div className="black-circle"/>
          <span className="title-message">成长历程</span>
        </div>
        <hr className="dotted-line"/>
      </div>

      <div className="custom-table-background">
        <table className="custom-table">
          <thead>
            <tr>
              <th rowSpan="2" colSpan="2">受理员</th>
              <th rowSpan="2">受理数</th>
              <th colSpan="2">拟办意见</th>
              <th colSpan="2">返回修改</th>
            </tr>
            <tr>
              <th>同意</th>
              <th>比例</th>
              <th>数量</th>
              <th>比例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="8" className="col-1">受理处</th>
              <td className="col-2"><input type="text"/></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text"/></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
            <td className="col-2">总计</td>
              <td className="col-2">20</td>
              <td className="col-2">20</td>
              <td className="col-2">20</td>
              <td className="col-2">20</td>
              <td className="col-2">20</td>
            </tr>
            <tr>
              <th rowSpan="8" className="col-1">话务组</th>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td className="col-2">总计</td>
              <td className="col-2">20</td>
              <td className="col-2">20</td>
              <td className="col-2">20</td>
              <td className="col-2">20</td>
              <td className="col-2">20</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
export default MyProcess;