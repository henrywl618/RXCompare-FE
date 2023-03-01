
/** Imports all svg files
 * 
 */

function importAll(r) {
    return r.keys().map( key => r(key))
}

const backendURL = process.env.BACKENDURL || "http://localhost:3001/drugs";
console.log(backendURL)

export { importAll, backendURL };