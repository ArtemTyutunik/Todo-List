import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {hideAlert} from "../../actions/actions";

export const Alert = () => {
    const warning = useSelector(state => state.warning);
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => dispatch(hideAlert()), 3000)
        return () => {
            clearTimeout();
        }
    })
    return (
        <div className= { warning? "alert alert-danger todo-alert alert-active":
            "alert alert-danger todo-alert"}
             role="alert">
            Please enter something
        </div>
    )

}
