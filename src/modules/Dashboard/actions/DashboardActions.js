import { DISCOVER_MOVIES_SUCCESS } from '../../../store/reducers/types';
import { getDiscover } from '../../../api';
import store from '../../../store/configStore';

export const discoverMovies = async () => {
	try {
		const discover = await getDiscover();
		store.dispatch({ type: DISCOVER_MOVIES_SUCCESS, payload: discover.data.results });
	} catch (e) {
		console.log('ERRO', e);
	}

}