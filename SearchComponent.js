import React, { useState } from 'react';

const SearchComponent = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search posts..." 
        value={searchTerm} 
        onChange={handleSearch}
      />
      <div>
        {filteredPosts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
