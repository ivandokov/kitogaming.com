/**
 * This code is not used by Nuxt but it enables IDE paths support
 */
module.exports = {
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './'),
            '~~': path.resolve(__dirname, './'),
            '@': path.resolve(__dirname, './'),
            '@@': path.resolve(__dirname, './'),
        }
    }
};
