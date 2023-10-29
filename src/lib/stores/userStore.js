import { writable } from 'svelte/store';

export const userStore = writable({});

export const USER_CACHE_NAME = 'user';

const init = (user) => {
	userStore.set(user);
};

const setCache = () => {
	let data;
	localStorage.removeItem(USER_CACHE_NAME);
	userStore.subscribe((value) => {
		data = value;
	});
	localStorage.setItem(USER_CACHE_NAME, JSON.stringify(data));
};

const getCache = () => {
	const jsonStr = localStorage.getItem(USER_CACHE_NAME);
	return JSON.parse(jsonStr);
};
export default {
	subscribe: userStore.subscribe,
	init,
	setCache,
	getCache
};
