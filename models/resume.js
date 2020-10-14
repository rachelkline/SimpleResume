module.exports = function (sequelize, DataTypes) {
    const Resume = sequelize.define("Resume", {
        education: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        jobHist1: {
            type: DataTypes.TEXT
        },
        jobHist2: {
            type: DataTypes.TEXT
        },
        relevantSkills: {
            type: DataTypes.TEXT
        },
        reference: {
            type: DataTypes.TEXT
        }
    });
    return Resume;
};