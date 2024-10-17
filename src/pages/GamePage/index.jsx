import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function GamePage() {
  const [playerList, setPlayerList] = useState();
  const [classList, setClassList] = useState();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery()
  const id = query.get('id')
  const day = id[0]; 

  console.log(day)

  const handleLoad = async () => {
        let a = (await axios.get(`/data/players/${id}.json`)).data
        setPlayerList(a)
        let b = (await axios.get('/data/h2c.json')).data
        setClassList(b)

    // let a = await axios.get('/data/games/20.json')
    console.log("s",b)
  }

  useEffect(()=>{
    handleLoad()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='Gamepage'>

        <br />
        <br />
        <div id="_title">
            <span class="txta">{playerList && (playerList.name.slice(0, 2) + "年段")}</span>
            <span class="txtb">{playerList && playerList.name.slice(2,)}</span>
            <Link to={`/?day=${day}`}><button class="home">首页</button></Link>
        </div>
        {
          playerList && playerList.players.map((item)=>{
            return (
              <>
                <p>&nbsp;</p>
                <table>
                  <thead>
                  <tr>
                  <th>{id.split("")[2] === '1' ? "#" :"赛道"}</th>
                  <th>{parseInt(id) >= 20019 && parseInt(id) <= 21006? "班级" :"姓名"}</th>
                  <th>成绩</th>
                  <th>备注</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      item.map((player, index)=>{
                        return (
                          <tr key={index}>
                          <td>{player.road}</td>
                          <td>{player.name === "null"? "-": player.name}</td>
                          <td>{player.data}</td>
                          <td>{
                            player.class !== '' ? player.class: classList && classList[player.name]
                          }</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                  </table>
              </>
            )
          })
        }
    </div>
  )
}
