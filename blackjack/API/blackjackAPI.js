const express = require('express');
const app = express();
const port = 3001;

let cards = [
    {id: 1, suite: "Hearts", rank: "Ace"},
    {id: 2, suite: "Hearts", rank: "Two"},
    {id: 3, suite: "Hearts", rank: "Three"},
    {id: 4, suite: "Hearts", rank: "Four"},
    {id: 5, suite: "Hearts", rank: "Five"},
    {id: 6, suite: "Hearts", rank: "Six"},
    {id: 7, suite: "Hearts", rank: "Seven"},
    {id: 8, suite: "Hearts", rank: "Eight"},
    {id: 9, suite: "Hearts", rank: "Nine"},
    {id: 10, suite: "Hearts", rank: "Ten"},
    {id: 11, suite: "Hearts", rank: "Jack"},
    {id: 12, suite: "Hearts", rank: "Queen"},
    {id: 13, suite: "Hearts", rank: "King"},
    {id: 14, suite: "Clubs", rank: "Ace"},
    {id: 15, suite: "Clubs", rank: "Two"},
    {id: 16, suite: "Clubs", rank: "Three"},
    {id: 17, suite: "Clubs", rank: "Four"},
    {id: 18, suite: "Clubs", rank: "Five"},
    {id: 19, suite: "Clubs", rank: "Six"},
    {id: 20, suite: "Clubs", rank: "Seven"},
    {id: 21, suite: "Clubs", rank: "Eight"},
    {id: 22, suite: "Clubs", rank: "Nine"},
    {id: 23, suite: "Clubs", rank: "Ten"},
    {id: 24, suite: "Clubs", rank: "Jack"},
    {id: 25, suite: "Clubs", rank: "Queen"},
    {id: 26, suite: "Clubs", rank: "King"},
    {id: 27, suite: "Diamonds", rank: "Ace"},
    {id: 28, suite: "Diamonds", rank: "Two"},
    {id: 29, suite: "Diamonds", rank: "Three"},
    {id: 30, suite: "Diamonds", rank: "Four"},
    {id: 31, suite: "Diamonds", rank: "Five"},
    {id: 32, suite: "Diamonds", rank: "Six"},
    {id: 33, suite: "Diamonds", rank: "Seven"},
    {id: 34, suite: "Diamonds", rank: "Eight"},
    {id: 35, suite: "Diamonds", rank: "Nine"},
    {id: 36, suite: "Diamonds", rank: "Ten"},
    {id: 37, suite: "Diamonds", rank: "Jack"},
    {id: 38, suite: "Diamonds", rank: "Queen"},
    {id: 39, suite: "Diamonds", rank: "King"},
    {id: 40, suite: "Spades", rank: "Ace"},
    {id: 41, suite: "Spades", rank: "Two"},
    {id: 42, suite: "Spades", rank: "Three"},
    {id: 43, suite: "Spades", rank: "Four"},
    {id: 44, suite: "Spades", rank: "Five"},
    {id: 45, suite: "Spades", rank: "Six"},
    {id: 46, suite: "Spades", rank: "Seven"},
    {id: 47, suite: "Spades", rank: "Eight"},
    {id: 48, suite: "Spades", rank: "Nine"},
    {id: 49, suite: "Spades", rank: "Ten"},
    {id: 50, suite: "Spades", rank: "Jack"},
    {id: 51, suite: "Spades", rank: "Queen"},
    {id: 52, suite: "Spades", rank: "King"},
];
let playerHand = [
    {}
];
let dealerHand = [
    {}
];