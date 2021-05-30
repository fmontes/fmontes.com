// Created with create-flayyer-app@1.17.1

const { config } = require('@flayyer/flayyer-types');
require('dotenv').config();

module.exports = config({
    engine: 'react-typescript',
    key: process.env.FLAYYER_KEY,
    deck: 'fmontes-flayyer',

    // Optionals
    name: 'Fmontes-Flayyer',
    description: 'Created with create-flayyer-app',
    private: true, // set to false to deploy publicly to https://flayyer.com/community
    sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'] // declare supported sizes
});
