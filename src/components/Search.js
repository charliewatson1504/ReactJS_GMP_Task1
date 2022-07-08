import "../styles.css";

export default function Search() {
  return (
    <form className="search-form">
      <input
        className="search-input"
        placeholder="What do you want to watch?"
      />
      <button className="btn">SEARCH</button>
    </form>
  );
}
