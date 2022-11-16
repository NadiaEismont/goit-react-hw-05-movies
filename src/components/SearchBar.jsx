import PropTypes from 'prop-types';
import { SearchInput, Button } from 'evergreen-ui';

const Searchbar = ({ onSubmit }) => (
  <header className="Searchbar">
    <form className="SearchForm" onSubmit={onSubmit}>
      <Button
        marginRight={10}
        appearance="primary"
        type="submit"
        className="SearchForm-button"
      >
        <span className="SearchForm-button-label">Go</span>
      </Button>

      <SearchInput
        className="SearchForm-input"
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movie here"
      />
    </form>
  </header>
);

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
