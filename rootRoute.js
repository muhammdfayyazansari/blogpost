const express = require("express");
const router = express.Router();

// router.use("/", (req, res) => {
//   res.status(200).send({
//     data: "fayyaz ansaseri",
//   });
// });

 


router.use("/users", require('./api/users/userRouter'))

module.exports = router;
