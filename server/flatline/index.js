export const groupBy = (collection, iterator) => {
		return collection.reduce((memo, item) => {
			const key = (typeof iterator === 'string') ? item[iterator] : iterator(item);
			if (!memo[key]) {
				memo[key] = [];
			}
			memo[key].push(item);
			return memo
		}, {})
};

export const flowRight = () => {


};