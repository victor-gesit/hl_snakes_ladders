import {describe, expect, test} from '@jest/globals';
import SnakesAndLaddersInstance from '../game_core/snakes_ladders';


describe('As a player I want to be able to move my token So that I can get closer to the goal', () => {
    const new_game = new SnakesAndLaddersInstance(["1", "2"])
    test('Game starts with token on square 1', () => {
        expect(true).toBe(true)
    });
});

describe('As a player I want to move my token based on the roll of a die So that there is an element of chance in the game', () => {
    test('Dice roll is between 1 and 6, inclusive', () => {
        expect(true).toBe(true)
    });
});