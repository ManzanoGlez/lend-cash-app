import React from "react";
import { useSelector } from "react-redux";

export const LoadingApp = () => {
    const { loading } = useSelector((state) => state.ui);
    return (
        loading && (
            <div className="loading animate__animated animate__fadeIn animate__faster">
                Loading
            </div>
        )
    );
};
 