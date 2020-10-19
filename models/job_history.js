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
    jobHistory.associate = function (models) {
        jobHistory.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return jobHistory;
};