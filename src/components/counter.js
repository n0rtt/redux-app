import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Counter = ({counter, dec, inc, rst}) => {
    return (
        <div className="wrapper">
            <div className='content'>
                <div className="box">
                    <h1>{counter}</h1>
                </div>
                <div className='btn-group'>
                    <button onClick={inc} className='btn plus'>
                        <img src="img/plus.png" alt="plus"/>
                    </button>
                    <button onClick={dec} className='btn minus'>
                        <img src="img/Minus.png" alt="minus"/>
                    </button>
                    <button onClick={rst} className='btn reset'>
                        <img src="img/reset1.png" alt="reset"/>
                        <img src="img/reset2.png" alt="reset"/>
                    </button>
                {/* <div class="up-down">
                    <button id='download' class='btn down'>
                        <img src="" alt="download">
                    </button>
                    <button id='upload' class='btn up'>
                        <img src="" alt="upload">
                    </button>
                </div> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter)