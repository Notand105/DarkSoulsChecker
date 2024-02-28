import { writable } from "svelte/store";
import uncheckedPiromancy from '../data/piromancies.json'

let localStoragePiromancy = window.localStorage.getItem('piromancy')

localStoragePiromancy= JSON.parse(localStoragePiromancy)

export const List = writable(localStoragePiromancy|| uncheckedPiromancy)