'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'JobTypes',
      [
        {
          name: 'Software Engineer',
          description:
            'Responsible for designing and developing software applications.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project Manager',
          description:
            'Oversees projects, manages teams, and ensures successful project delivery.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Quality Assurance',
          description:
            'Responsible for ensuring the quality of software through testing and feedback.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'WorkItemTypes',
      [
        {
          name: 'Bug',
          description: 'A defect in the application that needs fixing.',
          status: true,
          futureUses: 'Should be resolved before the next release.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Feature',
          description: 'A new functionality or improvement to the application.',
          status: true,
          futureUses: 'Implemented in future versions.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Technical Debt',
          description:
            'Refactoring or addressing suboptimal code or system design.',
          status: false,
          futureUses: 'Resolved once the main features are stable.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JobTypes', null, {});
    await queryInterface.bulkDelete('WorkItemTypes', null, {});
  },
};
