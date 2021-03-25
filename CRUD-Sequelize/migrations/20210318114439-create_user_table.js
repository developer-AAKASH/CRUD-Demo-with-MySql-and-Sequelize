'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		return queryInterface.createTable( "Users", {
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			userName: {
				type: Sequelize.STRING( 50 ),
				allowNull: false,
				unique: true
			},
			password: {
				type: Sequelize.STRING( 20 ),
				allowNull: false,
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		return queryInterface.dropTable("Users")
	}
};
