import React from "react"
import Banner from '../components/banner'
import Preview from '../components/preview'
import MovieContainer from '../components/MovieContainer'
class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Banner></Banner>
                <Preview/>
                <div style={{marginTop:'45%'}}>
                <MovieContainer/>
                </div>
            </>
        )
    }
}
export default Main