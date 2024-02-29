import { writable } from "svelte/store";
import uncheckedHonor from '../data/honor.json'

let localStorageHonor= window.localStorage.getItem('honor')

localStorageHonor= JSON.parse(localStorageHonor)

export const List = writable(localStorageHonor|| uncheckedHonor)