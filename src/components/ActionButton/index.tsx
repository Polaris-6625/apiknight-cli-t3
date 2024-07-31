import { useCallback } from "react";
import { resetCount, setCount } from "../../store/count";

function Actionbutton() {
    const handleAddTen = useCallback(() => {
        setCount(v => v + 10);
    },[]);

    const handleDeclareTen = useCallback(() => {
        setCount(v => v - 10);
    },[]);

    const handleIncrement = useCallback(() => {
        setCount(v => v + 1);
    },[]);

    const handleReset = useCallback(() => {
        resetCount();
    },[]);

    const handleSetCount = useCallback(() => {
        setCount(100);
    },[]);

    return (
        <>
            <button onClick={handleAddTen}>增加10</button>
            <button onClick={handleDeclareTen}>减少10</button>
            <button onClick={handleIncrement}>自增</button>
            <button onClick={handleReset}>重置</button>
            <button onClick={handleSetCount}>设置为100</button>
        </>
    )
}

export default Actionbutton;