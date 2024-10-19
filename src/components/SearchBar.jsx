const SearchBar = ({ inputRef, onSearch }) => {
	return (
		<div className='search-bar'>
			<input ref={inputRef} type='text' placeholder='Search' />
			<img
				src='/src/assets/images/search.png'
				alt='Search'
				onClick={onSearch}
			/>
		</div>
	)
}

export default SearchBar