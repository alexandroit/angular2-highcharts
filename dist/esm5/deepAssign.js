/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ isObj = function (x) {
    var /** @type {?} */ type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var ɵ0 = isObj;
var /** @type {?} */ hasOwnProperty = Object.prototype.hasOwnProperty;
var /** @type {?} */ propIsEnumerable = Object.prototype.propertyIsEnumerable;
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
    var /** @type {?} */ val = from[key];
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
    for (var /** @type {?} */ key in from) {
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
    for (var /** @type {?} */ s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcEFzc2lnbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiZGVlcEFzc2lnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscUJBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQztJQUNuQixxQkFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDcEIsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQztDQUNuRSxDQUFDOztBQUNGLHFCQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztBQUNyRCxxQkFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDOzs7OztBQUU3RCxrQkFBa0IsR0FBRztJQUNqQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxTQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztLQUM5RDtJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDdEI7Ozs7Ozs7QUFFRCxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHO0lBQzVCLHFCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFcEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUM7S0FDVjtJQUVELEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sSUFBSSxTQUFTLENBQUMsOENBQThDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ25GO0tBQ0o7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pCO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNoRDtDQUNKOzs7Ozs7QUFFRCxnQkFBZ0IsRUFBRSxFQUFFLElBQUk7SUFDcEIsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDZCxNQUFNLENBQUMsRUFBRSxDQUFDO0tBQ2I7SUFFRCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1QjtLQUNKOzs7Ozs7Ozs7O0lBWUQsTUFBTSxDQUFDLEVBQUUsQ0FBQztDQUNiOzs7Ozs7QUFFRCxNQUFNLHFCQUFxQixNQUFNO0lBQUUsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCw2QkFBTzs7SUFDdEMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUxQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjtJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDakIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNPYmogPSBmdW5jdGlvbiAoeCkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHg7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU291cmNlcyBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbktleSh0bywgZnJvbSwga2V5KSB7XG4gICAgdmFyIHZhbCA9IGZyb21ba2V5XTtcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvLCBrZXkpKSB7XG4gICAgICAgIGlmICh0b1trZXldID09PSB1bmRlZmluZWQgfHwgdG9ba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0ICgnICsga2V5ICsgJyknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0bywga2V5KSB8fCAhaXNPYmoodmFsKSkge1xuICAgICAgICB0b1trZXldID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvW2tleV0gPSBhc3NpZ24oT2JqZWN0KHRvW2tleV0pLCBmcm9tW2tleV0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduKHRvLCBmcm9tKSB7XG4gICAgaWYgKHRvID09PSBmcm9tKSB7XG4gICAgICAgIHJldHVybiB0bztcbiAgICB9XG5cbiAgICBmcm9tID0gT2JqZWN0KGZyb20pO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICAgICAgYXNzaWduS2V5KHRvLCBmcm9tLCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9pZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIC8vICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcbiAgICAvL1xuICAgIC8vICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICBpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG4gICAgLy8gICAgICAgICAgICBhc3NpZ25LZXkodG8sIGZyb20sIHN5bWJvbHNbaV0pO1xuICAgIC8vICAgICAgICB9XG4gICAgLy8gICAgfVxuICAgIC8vfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEFzc2lnbih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICB0YXJnZXQgPSB0b09iamVjdCh0YXJnZXQpO1xuXG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCBhcmdzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgIGFzc2lnbih0YXJnZXQsIGFyZ3Nbc10pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59Il19