import React, { useState } from 'react';
import AddCategory from './AddCategory';
import  GifGrid  from './GifGrid';

const GifApp = () => {

    const [categories,setCategories] = useState(['One Punch']);

    return (
        <>
            <h1>Gif App</h1>
            <AddCategory setCategories={ setCategories} />
            <hr />  
            <ol>
                {
                    categories.map( category =>(
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}
export default GifApp;