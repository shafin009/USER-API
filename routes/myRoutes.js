const router = require("express").Router();
const { randomUser, allUsers, saveAUser, updateUser, bulkUpdate, deleteUser, } = require("../controllers/controllers");
const { ValidSaveUser, validateUser, userIdValid, validManyId, } = require("../middleware/valid");

router.get("/random", randomUser);
router.get("/all", allUsers);
router.post("/save", ValidSaveUser, validateUser, saveAUser);
router.patch("/update", userIdValid, updateUser);
router.patch("/bulk-Update", validManyId, bulkUpdate);
router.delete("/delete", userIdValid, deleteUser);

module.exports = router;
