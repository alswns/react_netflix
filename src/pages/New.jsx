import React from "react"
import Preview from '../components/preview'
import MovieContainer from '../components/MovieContainer'
import Axios from "axios"
import withLayout from "../components/witLayout"
class New extends React.Component {
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
            let movies=new Array()
            response.data.results.map(value=>{
                if (value.vote_count>1000){
                    movies.push(value)
                }
                }
            )
            this.setState({pop_movies:movies})
        }).catch(err=>{
            console.log('err')
            console.log(err)
        })
        
        Axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr").then((response)=>{
            
            let movies=new Array()
            response.data.results.map(value=>{
                if (value.vote_count>1000){
                    movies.push(value)
                }
                }
            )
            console.log(movies)
            this.setState({trend_moivies:movies})
        }).catch(err=>{
            console.log('err')
            console.log(err)
        })
        

    }
    
    render() {
        return (
            <>
              
                <Preview data={this.state.data}/>
                <div style={{marginTop:'45%',overflowX:"hidden",overflowY:"hidden"}}>
                <MovieContainer title={'인기있는'} movie={this.state.pop_movies}/>
                <MovieContainer title={'트렌드'} movie={this.state.trend_moivies}/>
                
                </div>
            </>
        )
    }
}
export default withLayout(New)