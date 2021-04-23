import { STUDENT_CONTENT_STATUS_FAIL, STUDENT_CONTENT_STATUS_REQUEST, STUDENT_CONTENT_STATUS_RESET, STUDENT_CONTENT_STATUS_SUCCESS } from '../constants/studentConstants'
import { TEACHER_COURSES_REQUEST, TEACHER_COURSES_SUCCESS, TEACHER_COURSES_FAIL, TEACHER_SESSIONS_REQUEST, TEACHER_SESSIONS_SUCCESS, TEACHER_SESSIONS_FAIL, TEACHER_SESSION_SECTIONS_REQUEST, TEACHER_SESSION_SECTIONS_SUCCESS, TEACHER_SESSION_SECTIONS_FAIL, TEACHER_TEMP_SET, TEACHER_TEMP_RESET, TEACHER_COURSES_RESET, TEACHER_SESSIONS_RESET, TEACHER_SESSION_SECTIONS_RESET } from '../constants/teacherConstants'



// export const studentCoursesReducer = (state={ CoursesInfo: [] }, action) => {
//     switch(action.type) {
//         case TEACHER_COURSES_REQUEST:
//             return { loading: true, CoursesInfo: [] }
//         case TEACHER_COURSES_SUCCESS:
//             return { loading: false, CoursesInfo: action.payload }
//         case TEACHER_COURSES_FAIL:
//             return { loading: false, error: action.payload }
//         case TEACHER_COURSES_RESET:
//             return { CoursesInfo: [] }
//         default:
//             return state
//     }
// }

// export const studentSessionsReducer = (state={ SessionInfo: [] }, action) => {
//     switch(action.type) {
//         case TEACHER_SESSIONS_REQUEST:
//             return { loading: true, SessionInfo: [] }
//         case TEACHER_SESSIONS_SUCCESS:
//             return { loading: false, SessionInfo: action.payload }
//         case TEACHER_SESSIONS_FAIL:
//             return { loading: false, error: action.payload }
//         case TEACHER_SESSIONS_RESET:
//             return { SessionInfo: [] }
//         default:
//             return state
//     }
// }

// export const studentSessionSectionReducer = (state={ SessionSectionInfo: [] }, action) => {
//     switch(action.type) {
//         case TEACHER_SESSION_SECTIONS_REQUEST:
//             return { loading: true, SessionSectionInfo: [] }
//         case TEACHER_SESSION_SECTIONS_SUCCESS:
//             return { loading: false, SessionSectionInfo: action.payload }
//         case TEACHER_SESSION_SECTIONS_FAIL:
//             return { loading: false, error: action.payload }
//         case TEACHER_SESSION_SECTIONS_RESET:
//             return { SessionSectionInfo: [] }
//         default:
//             return state
//     }
// }

// export const studentTempReducer = (state={ urlParameter: {} }, action) => {
//     switch(action.type) {
//         case TEACHER_TEMP_SET:
//             return { urlParameter: {...state.urlParameter, [action.obj]: action.payload }}
//         case TEACHER_TEMP_RESET:
//             return { urlParameter: {} }
//         default:
//             return state
//     }
// }

export const studentContentStatusReducer = (state={ contentStatusInfo: [] }, action) => {
    switch(action.type) {
        case STUDENT_CONTENT_STATUS_REQUEST:
            return { loading: true, contentStatusInfo: [] }
        case STUDENT_CONTENT_STATUS_SUCCESS:
            return { loading: false, contentStatusInfo: action.payload }
        case STUDENT_CONTENT_STATUS_FAIL:
            return { loading: false, error: action.payload }
        case STUDENT_CONTENT_STATUS_RESET:
            return { contentStatusInfo: [] }
        default:
            return state
    }
}