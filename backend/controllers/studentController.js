const pool = require("../config/db");

// const getStudentCohort = (req, res) => {
//     const { tc_id } = req.body
//     pool.getConnection((err, conn) => {
//         if(err) res.status(400).send('Connection Error');
//         else {
//           let sql = 'SELECT * FROM Cohort WHERE TC_id = ?'

//           conn.query(sql, [tc_id], (err, result) => {
//               if(err) res.status(400).send('Querry Error');
//               else {
//                 if(result.length > 0) {
//                     res.json(result)
//                 }
//                 else {
//                     res.status(401)
//                     res.json({ message: "No Data Found" })
//                 }
//               }
//               conn.release();
//             })
//           }
//       })
// }

const getStudentCourses = (req, res) => {
	const { cu_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `SELECT * FROM Course a INNER JOIN CurriculumDetails b ON a.CO_id=b.CO_id WHERE CU_id = ?;`;

			conn.query(sql, [cu_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getStudentSessionPlans = (req, res) => {
	const { co_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `SELECT * FROM SessionPlan WHERE CO_id = ?;`;

			conn.query(sql, [co_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getStudentSections = (req, res) => {
	const { sp_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = "SELECT * FROM SessionSection WHERE SP_id = ?;";

			conn.query(sql, [sp_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getContent = (req, res) => {
	const { ct_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `SELECT * FROM Content WHERE  CT_id= ?;`;

			conn.query(sql, [ct_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getStudentAssessments = (req, res) => {
	const { st_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `select AM_id,AM_Name,AM_Duration from assessment where AM_id IN (select AM_id from cohortassessment where CH_id=(SELECT CH_id FROM cohortstudent WHERE ST_id = ?) and TC_id=(SELECT TC_id FROM cohortstudent WHERE ST_id = ?) and TP_id=(SELECT TP_id FROM cohortstudent WHERE ST_id = ?));`;

			conn.query(sql, [st_id, st_id, st_id], (err, result) => {
				if (err) {
					res.status(400).send("Querry Error");
					// console.log("hellooo");
				} else {
					// console.log("hellooo");
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

module.exports = {
	/*getStudentCohort,*/ getStudentCourses,
	getStudentSessionPlans,
	getStudentSections,
	getContent,
	getStudentAssessments,
};
