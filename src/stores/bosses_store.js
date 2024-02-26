import { writable } from "svelte/store";
import uncheckedBosses from '../data/bosses.json'

let localStorageBossesList = window.localStorage.getItem('listOfBosses')

localStorageBossesList = JSON.parse(localStorageBossesList)

export const List = writable(localStorageBossesList || uncheckedBosses)