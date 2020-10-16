module.exports = function (sequelize, DataTypes) {
    const jobHistory = sequelize.define("jobHistory", {
        jobOneTitle: {
            type: DataTypes.TEXT
        },
        employerOne: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        employmentOneDates: {
            type: DataTypes.TEXT
        },
        responsibilitiesOne: {
            type: DataTypes.TEXT
        },
        jobTwoTitle: {
            type: DataTypes.TEXT
        },
        employerTwo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        employmentTwoDates: {
            type: DataTypes.TEXT
        },
        responsibilitiesTwo: {
            type: DataTypes.TEXT
        }

    });
    jobHistory.associate = function(models) {
        // We're saying that a jobHistory should belong to an Author
        // A jobHistory can't be created without an Author due to the foreign key constraint
        jobHistory.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return jobHistory;
};