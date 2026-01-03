import React, {useEffect, useRef} from "react";
import { useSelector,useDispatch } from "react-redux";

export default function TeamsList() {
    const dispatch = useDispatch();
    const {teams} = useSelector((state) => state.teams);

    const listRef = useRef(null);

    useEffect(() => {
      dispatch(fetch)
    }, [dispatch]);

    useEffect(() =>)
};