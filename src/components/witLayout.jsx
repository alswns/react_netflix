import React from 'react'
import Banner from './banner'



    const withLayout=Page=>{
        return () => {
            return(
            <>
                <Banner/>
                <Page/>
            </>
            )

        }
    }
    
    export default withLayout   