import React from 'react'
import {userPost} from "./Sidebar"
import MateList from "./MateList "

type Props = {
    mates: userPost[];
}

const Main = (props :Props) => {
  return (
    <div className="Main">
      <MateList mates={props.mates}/>
    </div>
  )
}

export default Main
