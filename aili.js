/**
 * This is a common tool class for javascript
 */

/**
 * 检查是否为空
 * @param val
 * @returns {boolean}
 * @author 丁怀雷
 */

    function checkNull(val){
        switch (typeof(val))
        {
            case 'string':
                return val.length == 0 ? true : false;
                break;
            case 'number':
                return val == 0;
                break;
            case 'object':
                return val == null;
                break;
            case 'array':
                return val.length == 0;
                break;
            default:
                return true;
        }
    }

