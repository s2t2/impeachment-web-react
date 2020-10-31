




import React, { PureComponent, createRef} from 'react' //createRef, useState, useEffect, useRef
//import * as d3 from 'd3'

import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import Spinner from '../../Spinner'

function MyGraph(props){
    var height = props.height || 500
    var width = props.width || 300 // todo: use container ref instead

    return <span>
        <p>Height: {height} Width: {width}</p>
        <svg height={height} width={width} style={{border:"1px solid black"}}></svg>
    </span>
}

export default class NetworkGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null, width: null}
        this.containerRef = createRef()
        this.handleResize = this.handleResize.bind(this)
    }

    render() {
        return (
            <Card style={{marginBottom:0}}>
                <Card.Body>
                    {!this.state.parsedResponse ?
                        <Spinner/> :

                        <div ref={this.containerRef}>
                            <MyGraph width={this.state.width}/>
                        </div>
                    }
                </Card.Body>
            </Card>
        )
    }

    componentDidMount(){
        console.log("COMPONENT DID MOUNT")
        window.addEventListener("resize", this.handleResize)
        //const width = this.containerRef.current.clientWidth // containerRef is null here
        const width = window.innerWidth * 0.74
        this.setState({parsedResponse:"abc123", width: width})
    }

    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT")
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize(event){
        const width = this.containerRef.current.clientWidth // window.innerWidth * 0.75
        //const width = this.containerRef.current.width
        console.log("RESIZED THE WINDOW!!", width)
        this.setState({width: width})
    }

    componentDidUpdate(){
        //console.log("COMPONENT DID UPDATE")
    }

}
