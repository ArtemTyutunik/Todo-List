import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../../actions/actions";

export const FilterPanel = () => {
    const [buttons] = useState([
        {name: 'all', label: 'all'},
        {name: 'done', label: 'done'},
        {name: 'active', label: 'active'}
    ])
    const dispatch = useDispatch();
    const onChangeFilter = (name) => dispatch(changeFilter(name))
    const filterName = useSelector(state => state.filter);

    return (
        <div className = "filter-panel">
            <div className="filter-panel-span"><span>filter:</span></div>
            <div>
                {
                    buttons.map(({name,label}) => {
                        const className = filterName === name?
                        "filter-panel-btn btn-active" : "filter-panel-btn"
                        return (
                            <button className={className}
                                name={name}
                                onClick={() => onChangeFilter(name)}>
                                {label}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

// <button className=>all</button>
// <button className="filter-panel-btn">done</button>
// <button className="filter-panel-btn">active</button>