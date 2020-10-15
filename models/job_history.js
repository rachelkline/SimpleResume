module.exports = function (sequelize, DataTypes) {
    const jobHistory = sequelize.define("jobHistory", {
        jobTitle: {
            type: DataTypes.TEXT
        },
        employer: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        location: {
            type: DataTypes.TEXT
        },
        employmentDates: {
            type: DataTypes.TEXT
        },
        responsibilities: {
            type: DataTypes.TEXT
        }

    });
    return jobHistory;
};