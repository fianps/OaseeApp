const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        toJSON() {
          return { ...this.get(), password: undefined };
        }
        static associate(models) {
            
        }
    };

    User.init({
        newslikeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Newslike',
                key: 'id',
            }
        },
        newscommentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Newscomment',
                key: 'id',
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: { msg: 'Username must not be empty' },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Password must not be empty' },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: { msg: 'Email must not be empty' },
                is: {
                    args: /\S+@\S+\.\S+/,
                    msg: 'Email address must be valid',
                }
            },
        },
        gender: { 
            type: DataTypes.ENUM('L', 'P'),
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User',
    });
    return User;
}