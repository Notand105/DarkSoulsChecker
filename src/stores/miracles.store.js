import { writable } from "svelte/store";
import uncheckedMiracles from '../data/miracles.json'

let localStorageMiracles= window.localStorage.getItem('miracles')

localStorageMiracles = JSON.parse(localStorageMiracles)

export const List = writable(localStorageMiracles|| uncheckedMiracles)