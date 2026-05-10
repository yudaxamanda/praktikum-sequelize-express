'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // Membuat UUID otomatis di MySQL
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(120), // Dibatasi 120 karakter
        allowNull: false
      },
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false // Nilai awal selalu false
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Users', // Menghubungkan ke tabel Users
          key: 'id'
        },
        onUpdate: 'CASCADE', // Jika id user berubah, id di sini ikut berubah
        onDelete: 'CASCADE'  // Jika user dihapus, tugas ini ikut terhapus
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
    await queryInterface.dropTable('Tasks');
  }
};