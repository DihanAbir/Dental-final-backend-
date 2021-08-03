const express = require("express");
const {
  addADay,
  getAlldaysByDisease,
  updateDaysByDaysID,
  deleteDaysByDaysID,
  dropallDays,
  allPayment,
  getAlldays,
} = require("../controllers/days");

const router = express.Router();

router.route("/add/:diseaseid").post(addADay);
router.route("/:DaysId").put(updateDaysByDaysID).delete(deleteDaysByDaysID);
router.route("/:diseaseid").get(getAlldaysByDisease);
router.route("/payment/:diseaseid").get(allPayment);
router.route("/").get(getAlldays);
router.route("/dropallDays").delete(dropallDays);

// router.route('/:id').get(getADisease)
// router.route('/update/:id').put(updateADisease)
// router.route('/delete/:id').delete(deleteADisease)

module.exports = router;
