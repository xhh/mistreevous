import Callback from "./Callback";
import Lookup from "../../Lookup";
import { Agent } from "../../Agent";

/**
 * A STEP callback which defines an agent function to call when the associated node is updated.
 */
export default class Step extends Callback {
    /**
     * @param func The agent function or name to call.
     * @param args The array of callback argument definitions.
     */
    constructor(func: string | ((...args: any[]) => any), args: any[]) {
        super("step", args, func);
    }

    /**
     * Attempt to call the agent function that this callback refers to.
     * @param agent The agent.
     */
    callAgentFunction(agent: Agent): void {
        // Attempt to get the invoker for the callback function.
        const callbackFuncInvoker = Lookup.getFuncInvoker(agent, this.getFunction());

        // The callback function should be defined.
        if (callbackFuncInvoker === null) {
            throw new Error(
                `cannot call step function '${this.getFunction()}' as is not defined on the agent and has not been registered`
            );
        }

        // Call the callback function.
        callbackFuncInvoker(this.args);
    }
}
