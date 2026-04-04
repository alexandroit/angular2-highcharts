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
var ɵ0 = isObj;
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
export function deepAssign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    target = toObject(target);
    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcEFzc2lnbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiZGVlcEFzc2lnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztJQUFJLEtBQUssR0FBRyxVQUFVLENBQUM7O1FBQ2YsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNuQixPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQztBQUNwRSxDQUFDOzs7SUFDRyxjQUFjLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjOztJQUNoRCxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQjs7Ozs7QUFFNUQsU0FBUyxRQUFRLENBQUMsR0FBRztJQUNqQixJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNuQyxNQUFNLElBQUksU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7S0FDOUQ7SUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDOzs7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHOztRQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUVuQixJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtRQUNuQyxPQUFPO0tBQ1Y7SUFFRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzNDLE1BQU0sSUFBSSxTQUFTLENBQUMsOENBQThDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ25GO0tBQ0o7SUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNqQjtTQUFNO1FBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7QUFDTCxDQUFDOzs7Ozs7QUFFRCxTQUFTLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSTtJQUNwQixJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDYixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBRUQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNsQixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0tBQ0o7SUFFRCxxQ0FBcUM7SUFDckMsdURBQXVEO0lBQ3ZELEVBQUU7SUFDRixnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELDhDQUE4QztJQUM5QyxXQUFXO0lBQ1gsT0FBTztJQUNQLEdBQUc7SUFFSCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsTUFBTTtJQUFFLGNBQU87U0FBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQVAsNkJBQU87O0lBQ3RDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNPYmogPSBmdW5jdGlvbiAoeCkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHg7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU291cmNlcyBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbktleSh0bywgZnJvbSwga2V5KSB7XG4gICAgdmFyIHZhbCA9IGZyb21ba2V5XTtcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvLCBrZXkpKSB7XG4gICAgICAgIGlmICh0b1trZXldID09PSB1bmRlZmluZWQgfHwgdG9ba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0ICgnICsga2V5ICsgJyknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0bywga2V5KSB8fCAhaXNPYmoodmFsKSkge1xuICAgICAgICB0b1trZXldID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvW2tleV0gPSBhc3NpZ24oT2JqZWN0KHRvW2tleV0pLCBmcm9tW2tleV0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduKHRvLCBmcm9tKSB7XG4gICAgaWYgKHRvID09PSBmcm9tKSB7XG4gICAgICAgIHJldHVybiB0bztcbiAgICB9XG5cbiAgICBmcm9tID0gT2JqZWN0KGZyb20pO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICAgICAgYXNzaWduS2V5KHRvLCBmcm9tLCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9pZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIC8vICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcbiAgICAvL1xuICAgIC8vICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICBpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG4gICAgLy8gICAgICAgICAgICBhc3NpZ25LZXkodG8sIGZyb20sIHN5bWJvbHNbaV0pO1xuICAgIC8vICAgICAgICB9XG4gICAgLy8gICAgfVxuICAgIC8vfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEFzc2lnbih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICB0YXJnZXQgPSB0b09iamVjdCh0YXJnZXQpO1xuXG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCBhcmdzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgIGFzc2lnbih0YXJnZXQsIGFyZ3Nbc10pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59Il19