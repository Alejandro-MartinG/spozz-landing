import { writable } from 'svelte/store';

const defaultBackground = 'a'

export let backgroundStore = writable(defaultBackground);

backgroundStore.subscribe(value => value);
