import {
    ACTION_EXAMPLE
} from '../constants.js';

export function example(name) {
    return {
        type: ACTION_EXAMPLE,
        name
    }
}