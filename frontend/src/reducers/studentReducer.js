import {
	FAQ_FAIL,
	FAQ_REQUEST,
	FAQ_RESET,
	FAQ_SUCCESS,
} from "../constants/studentConstants";
import {
	STUDENT_ASSESSMENTS_SUCCESS,
	STUDENT_ASSESSMENTS_REQUEST,
	STUDENT_ASSESSMENTS_FAIL,
} from "../constants/studentConstants";
export const studentFAQReducer = (state = { FAQresult: [] }, action) => {
	switch (action.type) {
		case FAQ_REQUEST:
			return { loading: true, FAQresult: [] };
		case FAQ_SUCCESS:
			return { loading: false, FAQresult: action.payload };
		case FAQ_FAIL:
			return { loading: false, error: action.payload };
		case FAQ_RESET:
			return { FAQresult: [] };
		default:
			return state;
	}
};

export const studentAssessmentsReducer = (
	state = { AssessmentsInfo: [] },
	action
) => {
	switch (action.type) {
		case STUDENT_ASSESSMENTS_REQUEST:
			return { loading: true, AssessmentsInfo: [] };
		case STUDENT_ASSESSMENTS_SUCCESS:
			return { loading: false, AssessmentsInfo: action.payload };
		case STUDENT_ASSESSMENTS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
