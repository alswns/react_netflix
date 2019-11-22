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
                <div style={{marginTop:'50%',overflowX:"hidden"}}>
                <MovieContainer title={'영화'} movie={['신서유기7','신서유기6','신서유기5','신서유기4','신서유기3','신서유기2','신서유기1']}/>
                <MovieContainer title={'드라마'} movie={['동백꽃 필 무렵','타인은 지옥이다','별그대','리엑트','마춌냐','청년경찰','신서유기1']}/>
                </div>
            </>
        )
    }
}
export default Main