// adapted from
// <https://github.com/franciscop/drive-db/blob/08b79063da7911b163b75c065fc62c2019d5d648/index.js>
// to remove mention of `https` module

// Find the Google Drive data
const getKeys = (row) => Object.keys(row).filter((key) => /^gsx\$/.test(key));
const parseRow = (row) => {
    return getKeys(row).reduce((obj, key) => {
        obj[key.slice(4)] = row[key].$t;
        return obj;
    }, {});
};

const retrieve = async ({ sheet, tab }) => {
    const url = `https://spreadsheets.google.com/feeds/list/${sheet}/${tab}/public/values?alt=json`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error ${response.status} retrieving ${url}`);
    }

    const raw = await response.json();
    return raw.feed.entry.map(parseRow);
};

// Memoize a callback similar to React
const memo = (cb, map = {}) => async (options, timeout) => {
    const key = JSON.stringify(options);
    const time = new Date();
    if (map[key] && time - map[key].time < timeout) {
        return map[key].value;
    }
    map[key] = { value: await cb(options), time };
    return map[key].value;
};

// It should be memoized here, since we memoize the whole *request* and *parse*
const getSheet = memo(retrieve);

// The main drive() function
export default async (options) => {
    const optObject =
        typeof options === "object" ? options : { sheet: options };
    const { sheet = "", tab = "default", cache = 3600 } = optObject;

    // To update the data we need to make sure we're working with an id
    if (!sheet) throw new Error("Need a Google Drive sheet id to load");

    return getSheet({ sheet, tab }, cache);
};
