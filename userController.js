const users = [];

module.exports = {
  createUser: (req, res) => {
    try {
      const findedUser = users.find((user) => {
        return user.email === req.body.email;
      });
      if (findedUser) {
        return res.status(400).send({
          statusCode: 400,
          success: false,
          message: "Email already exist",
        });
      }
      users.push({
        email: req.body.email,
        userPassword: req.body.password,
      });

      return res.status(201).send({
        statusCode: 201,
        success: true,
        message: "User Created",
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  getUser: (req, res) => {
    try {
      return res.status(200).send({
        statusCode: 200,
        success: true,
        data: users,
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  deleteUser: (req, res) => {
    try {
      const index = req.params.id;
      users.splice(index, 1);
      return res.status(201).send({
        statusCode: 200,
        success: true,
        message: "Delete User sucessfully",
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  updateUser: (req, res) => {
    try {
      const index = req.params.id;
      const { email, password } = req.body;
      users[index].email = { email: email, userPassword: password };
      return res.status(201).send({
        statusCode: 200,
        success: true,
        message: "Put User sucessfully",
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
};
