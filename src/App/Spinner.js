import React from "react"
import ScaleLoader from "react-spinners/ScaleLoader"

export default function Spinner(){
    return (
        <div className="d-flex align-items-center min-vh-90">
            <div className="container text-center">
                <ScaleLoader
                    css={{display:"block", "margin": "0 auto"}}
                    size={150}
                    color={"#323a40"}
                    loading={true}
                />
            </div>
        </div>
    )
}
