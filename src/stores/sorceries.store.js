import { writable } from "svelte/store";
import uncheckedSorceries from '../data/sorceries.json'

let localStorageSorceries= window.localStorage.getItem('sorceries')

localStorageSorceries= JSON.parse(localStorageSorceries)

export const List = writable(localStorageSorceries|| uncheckedSorceries)