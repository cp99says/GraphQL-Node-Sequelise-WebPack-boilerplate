# **Simple boiler-plate code for GraphQl, Node.js and Sequelize to speed up the development process**



1. npm install
2. npm i -g sequelize-auto
3. set the credentials of your db in` ./app/database.js`
4. configure the database using phpMyAdmin or MySQL workbench or whichever db controller you are comfortable with
5. Delete all the files in`./app/Models `
6. now run the command`sequelize-auto -h localhost -d payments -u root -x password --dialect mysql -o ./app/models`
7. here host=localhost, database=payments, username=root, password is understood. On running this command the database schema will be generated according to your set configurations.
8. Add the models in`./app/database.js` in the models array
9. npm start
10. If you want to change the configurations of your database, let the changes be done and run the command in step 6 again to update the structure of schema
11. Lets say you added/remove a table as a part of change in step 10, follow steps 6 and 8 again
