import { writable } from "svelte/store";

const modeArr = [{ type: "bosses", selected: true }, { type: "miracles", selected: false}, { type: "piromancies", selected: false}, { type: "sorceries", selected: false},]

let mode = window.localStorage.getItem('')

mode = JSON.parse(mode)

export const Mode = writable(mode || modeArr)