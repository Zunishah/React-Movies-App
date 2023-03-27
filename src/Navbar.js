import React from 'react';

const Navbar = ({search,setSearch}) => {
  return (
    <>

    <div className="nav">
        <h1 className='heading'>Heading</h1>
        

        <input type="text" value={search} className='input'  placeholder='Search Movie' onChange={(e)=> setSearch(e.target.value)} />

    </div>
    
    
    
    
    
    </>
  );
}

export default Navbar;
