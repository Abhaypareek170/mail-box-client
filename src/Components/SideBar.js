import React from 'react'
import { BoxArrowInRight, CameraVideo, ChevronDown, Clock, FileEarmark, Inbox, Person, Phone, PlusCircleDotted, Send, Star } from 'react-bootstrap-icons'
import './SideBar.css'
const SideBar = (props) => {
  return (
    <>
        <div className="sidebar">
        <button className="sidebar__compose"><span className="material-icons" onClick={props.onShow}><PlusCircleDotted/></span>Compose</button>
        <div className="sidebarOption sidebarOption__active">
          <span className="material-icons"><Inbox/> </span>
          <h3>Inbox</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons"><Star/></span>
          <h3>Starred</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons"><Clock/> </span>
          <h3>Snoozed</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons"><BoxArrowInRight/> </span>
          <h3>Important</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons"> <Send/></span>
          <h3>Sent</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons"><FileEarmark/> </span>
          <h3>Drafts</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons"><ChevronDown/></span>
          <h3>More</h3>
        </div>

        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
            <span className="material-icons"><Person/></span>
            <span className="material-icons"><CameraVideo/></span>
            <span className="material-icons"><Phone/></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar