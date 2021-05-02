import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { updateAssessmentDetails } from "../actions/teacherActions";
import { assessmentDetails } from "../actions/teacherActions";
//import {fun} from '../screens/CohortScreen.js'

export var AssessmentScreen = ({ history, match }) => {
	var dispatch = useDispatch();

	var userLogin = useSelector((state) => state.userLogin);
	var { userInfo, role } = userLogin;

	var assessmentDetail = useSelector((state) => state.assessment);
	var { loading, AssessmentsInfo, error } = assessmentDetail;

	var teacherCohort = useSelector((state) => state.teacherCohort);
	var { TeacherInfo } = teacherCohort;

	var teacherCourses = useSelector((state) => state.teacherCourses);
	var { CoursesInfo } = teacherCourses;

	var tc_id = useSelector((state) => state.userLogin.userInfo.TC_id);
	var tp_id = useSelector((state) => state.userLogin.userInfo.TP_id);
	//var ch_id = useSelector(state=>state.teacherCourses.TeacherInfo[0].CH_id)

	//var co_id = useSelector(state=>state.AssessmentsInfo.CO_id)

	var Getcuid = (tc_id, tp_id, am_id, co_id) => {
		var text = "unlock";
		var cu_id;
		var ch_id;
		for (var i = 0; i < Object.keys(CoursesInfo).length; i++) {
			//console.log(CoursesInfo[i].CO_id)
			if (CoursesInfo[i].CO_id === co_id) {
				cu_id = CoursesInfo[i].CU_id;
			}
			break;
		}

		for (var i = 0; i < Object.keys(TeacherInfo).length; i++) {
			console.log("ch_id - ");
			if (TeacherInfo[i].CU_id === cu_id) {
				ch_id = TeacherInfo[i].CH_id;
			}
			console.log(TeacherInfo[i].CH_id);
			break;
		}

		updateAssessmentDetails(ch_id, tc_id, tp_id, am_id, co_id);
	};

	useEffect(() => {
		if (userInfo && role === "Teacher") {
			dispatch(assessmentDetails(match.params.id));
		} else {
			history.push("/login");
		}
	}, [dispatch, history, match, role, userInfo]);

	return (
		<>
			<h1 style={{ "text-align": "center" }}>Assessments</h1>
			{loading ? (
				<Loader>Loading....</Loader>
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table
					striped
					bordered
					hover
					borderless
					style={{ margin: "5% 20%", width: "60%", justifyContent: "center" }}
				>
					<thead>
						<tr>
							<th>ASSESSMENT NAME</th>
							<th>ASSESSMENT DURATION</th>
						</tr>
					</thead>
					<tbody>
						{AssessmentsInfo.map((key, index) => (
							<tr key={key.AM_id}>
								<td>{key.AM_Name}</td>

								{/* <Link to={`/sections/${key.SP_id}`}><td>{key.SP_Name}</td></Link> */}
								<td>
									{key.AM_Duration === null
										? `${key.AM_Duration}`
										: key.AM_Duration}
								</td>
								<td>
									<button
										onClick={() => Getcuid(tc_id, tp_id, key.AM_id, key.CO_id)}
									>
										unlock
									</button>
								</td>
								{/* <button onClick={Getcuid(tc_id,tp_id,key.AM_id,key.CO_id)}></button> */}
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default AssessmentScreen;

//OnClick
