import {
	STUDENT_COHORT_REQUEST,
	STUDENT_COHORT_SUCCESS,
	STUDENT_COHORT_FAIL,
	STUDENT_COURSES_REQUEST,
	STUDENT_COURSES_SUCCESS,
	STUDENT_COURSES_FAIL,
	STUDENT_SESSIONS_REQUEST,
	STUDENT_SESSIONS_SUCCESS,
	STUDENT_SESSIONS_FAIL,
	STUDENT_SESSION_SECTIONS_REQUEST,
	STUDENT_SESSION_SECTIONS_SUCCESS,
	STUDENT_SESSION_SECTIONS_FAIL,
	STUDENT_ASSESSMENTS_SUCCESS,
	STUDENT_ASSESSMENTS_REQUEST,
	STUDENT_ASSESSMENTS_FAIL,
} from "../constants/studentConstants";
import axios from "axios";

// export const cohortDeatils = (tc_id) => async(dispatch, getState) => {
//     try {
//         dispatch({ type: STUDENT_COHORT_REQUEST })

//         const config = {
//             header: {
//                 'Content-Type': 'application/json'
//             }
//         }

//         const { data } = await axios.post('api/teachers/cohort', {tc_id}, config)
//         dispatch({ type: STUDENT_COHORT_SUCCESS, payload: data })

//     } catch (error) {
//         dispatch({
//             type: STUDENT_COHORT_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message
//         })
//     }
// }

export const courseDetails = (cu_id) => async (dispatch, getState) => {
	try {
		dispatch({ type: STUDENT_COURSES_REQUEST });

		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"/api/student/courses",
			{ cu_id },
			config
		);
		dispatch({ type: STUDENT_COURSES_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: STUDENT_COURSES_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const sessionDetails = (co_id) => async (dispatch, getState) => {
	try {
		dispatch({ type: STUDENT_SESSIONS_REQUEST });

		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"/api/student/sessions",
			{ co_id },
			config
		);
		dispatch({ type: STUDENT_SESSIONS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: STUDENT_SESSIONS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const sessionSectionDetails = (sp_id) => async (dispatch, getState) => {
	try {
		dispatch({ type: STUDENT_SESSION_SECTIONS_REQUEST });

		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"/api/student/sections",
			{ sp_id },
			config
		);
		dispatch({ type: STUDENT_SESSION_SECTIONS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: STUDENT_SESSION_SECTIONS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const studentassessmentDetails = (st_id) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({ type: STUDENT_ASSESSMENTS_REQUEST });

		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"/api/student/studentassessment",
			{ st_id },
			config
		);
		dispatch({ type: STUDENT_ASSESSMENTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: STUDENT_ASSESSMENTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
