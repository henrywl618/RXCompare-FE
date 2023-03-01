
/** Imports all svg files
 * 
 */

function importAll(r) {
    return r.keys().map( key => r(key))
}

const backendURL = "https://drugpriceapi.com/drugs";

export { importAll, backendURL };