import React from 'react';
import profileImage from '../../images/profile_image.jpeg'


const HeaderExtra = () => {
    return (
        <div className="header-extra">
            <i className="material-icons comment-icon">comment</i>
            <button className="share-button">
                <i className="material-icons lock-icon">lock</i>
                Share
            </button>
            <div className="profile-image">
                <img src={profileImage}></img>
            </div>


        </div>
    )
}

export default React.memo(HeaderExtra);