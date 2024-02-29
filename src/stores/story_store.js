import { writable } from "svelte/store";
import uncheckedStories from '../data/story.json'

let localStorageStory = window.localStorage.getItem('story')

localStorageStory= JSON.parse(localStorageStory)

export const List = writable(localStorageStory|| uncheckedStories)