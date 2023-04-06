import express from 'express';
import pg from 'pg';
import { Sequelize, DataTypes } from 'sequelize';

//Crear conexión
const sequelize = new Sequelize("consultorio", "postgres", "1234",
    { host: "localhost", dialect: "postgres" });




//Definir nombre de la tabla y sus campos
const User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: { type: DataTypes.STRING }
});

User.sync();