import React from 'react'


interface SearchProps {
    onClose: () => void; // Add the onClose prop in the component's props interface
  }

  const Search: React.FC<SearchProps> = ({ onClose }) =>  {
  return (
    <div>
      <div className=''>
<input type="text" className='rounded-full bg-white w-56 h-10 mr-2 pl-4 pb-1' placeholder='Search' />
      </div>
    </div>
  )
}


export default Search;