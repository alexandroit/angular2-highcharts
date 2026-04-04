/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isObj = function (x) {
    /** @type {?} */
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
const ɵ0 = isObj;
/** @type {?} */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/** @type {?} */
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
 * @param {?} val
 * @return {?}
 */
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Sources cannot be null or undefined');
    }
    return Object(val);
}
/**
 * @param {?} to
 * @param {?} from
 * @param {?} key
 * @return {?}
 */
function assignKey(to, from, key) {
    /** @type {?} */
    var val = from[key];
    if (val === undefined || val === null) {
        return;
    }
    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }
    if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val;
    }
    else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}
/**
 * @param {?} to
 * @param {?} from
 * @return {?}
 */
function assign(to, from) {
    if (to === from) {
        return to;
    }
    from = Object(from);
    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key);
        }
    }
    //if (Object.getOwnPropertySymbols) {
    //    var symbols = Object.getOwnPropertySymbols(from);
    //
    //    for (var i = 0; i < symbols.length; i++) {
    //        if (propIsEnumerable.call(from, symbols[i])) {
    //            assignKey(to, from, symbols[i]);
    //        }
    //    }
    //}
    return to;
}
/**
 * @param {?} target
 * @param {...?} args
 * @return {?}
 */
export function deepAssign(target, ...args) {
    target = toObject(target);
    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcEFzc2lnbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiZGVlcEFzc2lnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztJQUFJLEtBQUssR0FBRyxVQUFVLENBQUM7O1FBQ2YsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNuQixPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQztBQUNwRSxDQUFDOzs7SUFDRyxjQUFjLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjOztJQUNoRCxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQjs7Ozs7QUFFNUQsU0FBUyxRQUFRLENBQUMsR0FBRztJQUNqQixJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNuQyxNQUFNLElBQUksU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7S0FDOUQ7SUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDOzs7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHOztRQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUVuQixJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtRQUNuQyxPQUFPO0tBQ1Y7SUFFRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzNDLE1BQU0sSUFBSSxTQUFTLENBQUMsOENBQThDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ25GO0tBQ0o7SUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNqQjtTQUFNO1FBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7QUFDTCxDQUFDOzs7Ozs7QUFFRCxTQUFTLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSTtJQUNwQixJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDYixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBRUQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNsQixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0tBQ0o7SUFFRCxxQ0FBcUM7SUFDckMsdURBQXVEO0lBQ3ZELEVBQUU7SUFDRixnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELDhDQUE4QztJQUM5QyxXQUFXO0lBQ1gsT0FBTztJQUNQLEdBQUc7SUFFSCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSTtJQUN0QyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0I7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzT2JqID0gZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB4O1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn07XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcbiAgICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NvdXJjZXMgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25LZXkodG8sIGZyb20sIGtleSkge1xuICAgIHZhciB2YWwgPSBmcm9tW2tleV07XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh0bywga2V5KSkge1xuICAgICAgICBpZiAodG9ba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHRvW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCAoJyArIGtleSArICcpJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwodG8sIGtleSkgfHwgIWlzT2JqKHZhbCkpIHtcbiAgICAgICAgdG9ba2V5XSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b1trZXldID0gYXNzaWduKE9iamVjdCh0b1trZXldKSwgZnJvbVtrZXldKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbih0bywgZnJvbSkge1xuICAgIGlmICh0byA9PT0gZnJvbSkge1xuICAgICAgICByZXR1cm4gdG87XG4gICAgfVxuXG4gICAgZnJvbSA9IE9iamVjdChmcm9tKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgICAgICAgIGFzc2lnbktleSh0bywgZnJvbSwga2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAvLyAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG4gICAgLy9cbiAgICAvLyAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgaWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuICAgIC8vICAgICAgICAgICAgYXNzaWduS2V5KHRvLCBmcm9tLCBzeW1ib2xzW2ldKTtcbiAgICAvLyAgICAgICAgfVxuICAgIC8vICAgIH1cbiAgICAvL31cblxuICAgIHJldHVybiB0bztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBBc3NpZ24odGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgdGFyZ2V0ID0gdG9PYmplY3QodGFyZ2V0KTtcblxuICAgIGZvciAodmFyIHMgPSAwOyBzIDwgYXJncy5sZW5ndGg7IHMrKykge1xuICAgICAgICBhc3NpZ24odGFyZ2V0LCBhcmdzW3NdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufSJdfQ==