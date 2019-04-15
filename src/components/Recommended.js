import React from 'react';
import '../css/Recommended.css';

class Recommended extends React.Component {

    render() {
        return (
            <div class="recommended-container">
                <h3 className="recommended-header ui header">Recommended For You!</h3>
                <div className="grid-container">
                    <div className="grid-item">
                        <div class="card">
                            <img alt="" src={require('../img/test1.jpg')}></img>
                            <div class="container">
                                <h4>Title</h4>
                                <p>Desc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div class="card">
                            <img alt="" src={require('../img/test1.jpg')}></img>
                            <div class="container">
                                <h4>Title</h4>
                                <p>Desc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div class="card">
                            <img alt="" src={require('../img/test1.jpg')}></img>
                            <div class="container">
                                <h4>Title</h4>
                                <p>Desc.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="view-more-label-container">
                    <label className="view-label">View More</label>
                    <i className="angle right large icon"></i>
                </div>
            </div>
        )
    }
}

export default Recommended;