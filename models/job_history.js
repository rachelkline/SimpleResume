module.exports = function (sequelize, DataTypes) {
    const jobHistory = sequelize.define("jobHistory", {
        jobTitleOne: {
            type: DataTypes.TEXT
        },
        employerNameOne: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        locationOne: {
            type: DataTypes.TEXT
        },
        employmentDatesOne: {
            type: DataTypes.TEXT
        },
        responsibilitiesOne: {
            type: DataTypes.TEXT
        },
        jobTitleTwo: {
            type: DataTypes.TEXT
        },
        employerNameTwo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        locationTwo: {
            type: DataTypes.TEXT
        },
        employmentDatesTwo: {
            type: DataTypes.TEXT
        },
        responsibilitiesTwo: {
            type: DataTypes.TEXT
        }
    });
    return jobHistory;
};