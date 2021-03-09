import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = (state) => {
    debugger
    return {giphys: state.giphys}
}

const mapDispathcToProps = dispatch => {

    return {
        fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm))
    }
}

export default connect(mapStateToProps,mapDispathcToProps)(GiphysSearch);