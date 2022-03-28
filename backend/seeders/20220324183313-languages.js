/* eslint-disable no-unused-vars */

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.bulkInsert(
            "language",
            [
                {
                    name: "Python",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Javascript",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Typescript",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete("People", null, {});
    },
};
