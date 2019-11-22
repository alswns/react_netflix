import React from "react"
import withLayout from "../components/witLayout"
import Preview from '../components/preview'
import MovieContainer from '../components/MovieContainer'
import Axios from "axios"
class Tv extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            pop_movies:[],
            trend_moivies:[]
        }
    }

    componentDidMount(){
        Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr").then((response)=>{
            console.log(response.data.results)
            console.log(typeof(response.data.results))
            this.setState({pop_movies:response.data.results})
        }).catch(err=>{
            console.log('err')
            console.log(err)
        })
        
        Axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr").then((response)=>{
            console.log(response.data.results)
            console.log(typeof(response.data.results))
            this.setState({trend_moivies:response.data.results})
        }).catch(err=>{
            console.log('err')
            console.log(err)
        })
        

    }
    
    render() {
        return (
            <>
                
                <Preview data={this.state.data}/>
                <div style={{marginTop:'50%',overflowX:"hidden",overflowY:"hidden"}}>
                <MovieContainer title={'인기있는'} movie={this.state.pop_movies}/>
                <MovieContainer title={'트렌드'} movie={this.state.trend_moivies}/>
                
                </div>
            </>
        )
    }
}
export default withLayout(Tv)