import React, { useEffect, useState } from 'react'
import downloadFile from '../../utils/downloadFile'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export default function GameListPage() {
    const [timer, setTimer] = useState(0);
    const [time, setTime] = useState();
    const [gameList, setGameList] = useState();

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
      const query = useQuery()
      const day = query.get('day')

      console.log(day)

    const getTime = () => {
        var date = new Date(); //日期对象
        var now = "";
        now = now + ((date.getHours() < 10) ? "0" : "") + date.getHours() + ":";
        now = now + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
        now = now + ((date.getHours() < 12) ? "AM" : "PM");
        setTime(now)
    }

    useEffect(()=>{
        clearInterval(timer)
        getTime()
        setTimer(setInterval(getTime, 1000))
        
        return () => {
            clearInterval(timer)
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        handleLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day])

    const handleLoad = async () => {
        if(day === "2"){
            let a = (await axios.get('/data/games/20.json')).data
            setGameList(a)
        }else{
            let a = (await axios.get('/data/games/10.json')).data
            setGameList(a)
        }
        // let a = await axios.get('/data/games/20.json')
        // console.log("s",a)
    }

    async function onDownload(e) {
        e.preventDefault()
        await downloadFile(`/data/2024年福州八中第55届运动会秩序册.pdf`);
    }
  return (
    <div className='GameListPage'>
        
    
        <br />
        <br />
        <div id="first_part">
            <div className="time">
                <div className="txta zi"><span id="clock">现在时刻</span></div>
                <span className="txtb zi"><div id="nowDiv">{time}</div></span>
            </div>
            <a onClick={onDownload} href='/data/2024年福州八中第55届运动会秩序册.pdf'><div className="all_table">
                <span className="txta zi">点击下载</span>
                <span className="txtb zi">秩序册</span>
            </div></a>
        </div>

        <br />
        <br />

        <div id="date">
            <Link className="txtb" to={day === "2"? "/?day=1": "/?day=2"}><span className="txta zi">{day === "2"? "前一天→": "后一天→"}</span></Link>
            <span className="txta zi">10月{day==="2"? "18": "17"}日 比赛项目</span>
        </div>

        <br />
        <br />
        <div style={{fontSize: "50px", textAlign: "center", fontFamily: "楷体"}}>径赛</div>
        <br />
        <table>
            <thead>
                <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <td><strong style={{fontFamily: "黑体"}}>上午</strong></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            
            {
                // (function(){
                //     console.log(gameList)
                //     return ''
                // })
                gameList && 
                gameList[0].map((item)=>{
                    console.log(item)
                    return (
                        <tr>
                        <td>{item.grade}</td>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td><Link to={item.link}>查看详情</Link></td>
                        </tr>
                    )
                })
            }
            
            <tr>
            <td><strong style={{fontFamily: "黑体"}}>下午</strong></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            
            {
                // (function(){
                //     console.log(gameList)
                //     return ''
                // })
                gameList && 
                gameList[1].map((item)=>{
                    console.log(item)
                    return (
                        <tr>
                        <td>{item.grade}</td>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td><Link to={item.link}>查看详情</Link></td>
                        </tr>
                    )
                })
            }

            </tbody>
        </table>
        <table className="zi">
            <colgroup>
                <col className="col_grade" />
                <col className="col1" />
                <col className="col2" />
                <col className="col3" />
            </colgroup>

            <code className="text" markdown></code>
        </table>
            <br />
            <div style={{fontSize: "50px", textAlign: "center", fontFamily: "楷体"}}>田赛</div>
            <br />
            <table>
            <thead>
                <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <td><strong style={{fontFamily: "黑体"}}>上午</strong></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            
            {
                // (function(){
                //     console.log(gameList)
                //     return ''
                // })
                gameList && 
                gameList[2].map((item)=>{
                    console.log(item)
                    return (
                        <tr>
                        <td>{item.grade}</td>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td><Link to={item.link}>查看详情</Link></td>
                        </tr>
                    )
                })
            }
            
            <tr>
            <td><strong style={{fontFamily: "黑体"}}>下午</strong></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            
            {
                // (function(){
                //     console.log(gameList)
                //     return ''
                // })
                gameList && 
                gameList[3].map((item)=>{
                    console.log(item)
                    return (
                        <tr>
                        <td>{item.grade}</td>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td><Link to={item.link}>查看详情</Link></td>
                        </tr>
                    )
                })
            }

            </tbody>
        </table>
            <table className="zi">
                <colgroup>
                    <col className="col_grade" />
                    <col className="col1" />
                    <col className="col2" />
                    <col className="col3" />
                </colgroup>
        </table>
    </div>
  )
}
