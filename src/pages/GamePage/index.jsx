import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function GamePage() {
  const [playerList, setPlayerList] = useState();

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
    
    // let a = await axios.get('/data/games/20.json')
    console.log("s",a)
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
            <span class="txta">{playerList && playerList.grade}</span>
            <span class="txtb">{playerList && playerList.name}</span>
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
                  <th>赛道</th>
                  <th>姓名</th>
                  <th>数据</th>
                  <th>备注</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      item.map((player)=>{
                        return (
                          <tr>
                          <td>{player.road}</td>
                          <td>{player.name}</td>
                          <td>{player.data}</td>
                          <td>{player.class}</td>
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
