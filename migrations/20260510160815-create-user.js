'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // Membuat UUID otomatis di MySQL
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false // Nama wajib diisi [cite: 64]
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, // Email wajib diisi [cite: 65]
        unique: true      // Email tidak boleh ada yang sama [cite: 65]
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: false // Password wajib diisi [cite: 65]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};