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

    Resume.associate = function(models) {
        // We're saying that a Resume should belong to an Author
        // A Resume can't be created without an Author due to the foreign key constraint
        Resume.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
    }
    return Resume;
};