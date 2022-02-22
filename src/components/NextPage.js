import React from 'react';
import {Link} from "react-router-dom";

export default function NextPage(props) {

    return (
        <div>
            <button>
                <Link to={props.link}>{props.label}</Link>
            </button>
        </div>
    )
}