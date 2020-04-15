import React, {Component} from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import MediaQuery from 'react-responsive';
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";

class Chat extends Component {

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Chat'})}>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <MediaQuery minDeviceWidth={1224}>
                        <div className='justify-content-center center m-5'>
                            <div className='card col-lg-10 border-danger'>
                                <div className='card-body border-danger'>
                                    <div id="tlkio" data-channel="c1bdac" style={{height: '600px', width: "100%"}}/>
                                </div>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1224}>
                        <div className='justify-content-center center'>
                            <div id="tlkio" data-channel="c1bdac" style={{height: '600px', width: "100%"}}/>
                        </div>
                    </MediaQuery>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Chat;
