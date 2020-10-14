module.exports = function (sequelize, DataTypes) {
    const jobHistory1 = sequelize.define("jobHistory1", {
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
        employmentDate: {
            type: DataTypes.TEXT
        },
        responsibilities: {
            type: DataTypes.TEXT
        }
    });
    return jobHistory1;
};