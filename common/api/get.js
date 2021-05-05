import $http from '../http.js';

export const get_Info = (data) => {
	return $http({
		url: 'get_Info',
		data
	})
}

