import { Course, Faculty,Program } from "./types";
import { addFacultyToCourse,addCourseToProgram } from "./helpers";

const msd: Program = { name: 'Masters in Software Development', courses: [] };
const asaad: Faculty = { firstname: "Asaad", lastname: "Saad" };
const keith: Faculty = { firstname: "Keith", lastname: "Levi" };
const mwp: Course = { title: "MWP", Code: "SD500", faculty: [] };

addFacultyToCourse(mwp, asaad);
addFacultyToCourse(mwp, keith);
addCourseToProgram(msd, mwp);

console.dir(msd, { depth: null });