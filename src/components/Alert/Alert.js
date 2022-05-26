import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {hideAlert} from "../../actions/actions";

export const Alert = () => {
    const warning = useSelector(state => state.warning);
    const dispatch = useDispatch();

    const classNames = warning? "alert alert-danger todo-alert alert-active":
        "alert alert-danger todo-alert"

    return (
        <div className= {classNames}
             role="alert">
            <p>Please enter something</p>
            <button type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => dispatch(hideAlert())}></button>
        </div>
    )

}
