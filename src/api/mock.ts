import {
    ICourse,
    IAuth,
    IAuthResponse,
    ServerResponse,
    ICourseRequest,
    ICourseDetail,
    ITopic,
    IComment
} from "../models/models";

export const checkLogin = (data: IAuth) :Promise<IAuthResponse> => new Promise(resolve => {
    setTimeout(() => resolve( {access: "eyJhbGciO", refresh: "eyJhbGciO"} ), 1000);
});

export const createCommentRequest = (data: IComment) :Promise<IComment> => new Promise(resolve => {
    setTimeout(() => resolve( {id: data.id, comment: data.comment} ), 1000);
});

export const getCourses = (data: ICourseRequest) :Promise<ServerResponse<ICourse>> => new Promise(resolve => {
    setTimeout(() => resolve( {
        count: 1234,
        next: 2,
        previous: null,
        results: [
            {
                id: 1,
                name: "Math",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            },
            {
                id: 2,
                name: "English",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            },
            {
                id: 3,
                name: "History",
                description: "Some description",
            },
            {
                id: 4,
                name: "History",
                description: "Some description",
            },
            {
                id: 5,
                name: "History",
                description: "Some description",
            },
            {
                id: 6,
                name: "History",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            },
            {
                id: 7,
                name: "History",
                description: "Some description",
            },
            {
                id: 8,
                name: "History",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            },
        ]
        }
    ), 1000);
});

export const getCourseInfo = () :Promise<ICourseDetail<ITopic>> => new Promise(resolve => {
    setTimeout(() => resolve( {
        id: 1,
        name: "Intro",
        description: "Basic intro",
        course_topics: [
            {
                id: 1,
                name: "Math",
                description: "Some description",
                date: "22-11-2022",
                type: "Upcoming",
                comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            },
            {
                id: 2,
                name: "Math",
                description: "Some description",
                date: "22-12-2021",
                type: "Upcoming",
                comment: "Lorem ipsum dolor sit amet.",
            },
            {
                id: 3,
                name: "Math",
                description: "Some description",
                date: "22-12-2023",
                type: "Upcoming",
                comment: "",
            },
            {
                id: 4,
                name: "Math",
                description: "Some description",
                date: "22-12-2022",
                type: "Upcoming",
                comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            },
            {
                id: 5,
                name: "Math",
                description: "Some description",
                date: "22-12-2022",
                type: "Upcoming",
                comment: "Lorem ipsum dolor sit amet, adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            },
            {
                id: 6,
                name: "Math",
                description: "Some description",
                date: "27-12-2022",
                type: "Upcoming",
                comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            },
            {
                id: 7,
                name: "Math",
                description: "Some description",
                date: "20-12-2022",
                type: "Upcoming",
                comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            },
        ]
        }
    ), 2000);
});