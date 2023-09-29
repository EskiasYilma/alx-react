import { Map, fromJS } from "immutable";
import { getListCourses } from "./courseSelector";
import courses from "../../dist/courses.json"
const state = {
  courses: fromJS(courses),
};
const expectedCase = [{
        id: "1",
        name: "ES6",
        credit: 60,
    },
    {
        id: "2",
        name: "Webpack",
        credit: 20,
    },
    {
        id: "3",
        name: "React",
        credit: 40,
    },
];

it("tests Course selectors", function() {

    const courseList = getListCourses(state);

    expect(courseList.toJS()).toEqual(expectedCase);
});
