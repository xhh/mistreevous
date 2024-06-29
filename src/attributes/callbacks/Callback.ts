import { Agent } from "../../Agent";
import Attribute, { AttributeDetails } from "../Attribute";

/**
 * Details of a node callback attribute.
 */
export type CallbackAttributeDetails = {
    /** The agent function or name that is called. */
    calls: string | Function;
} & AttributeDetails;

/**
 * A base node callback attribute.
 */
export default abstract class Callback extends Attribute<CallbackAttributeDetails> {
    /**
     * @param type The node attribute type.
     * @param args The array of decorator argument definitions.
     * @param func The the agent function or name to call.
     */
    constructor(type: string, args: any[], private func: string | Function) {
        super(type, args);
    }

    /**
     * Gets the name of the agent function to call.
     */
    getFunction = () => this.func;

    /**
     * Gets the attribute details.
     */
    getDetails(): CallbackAttributeDetails {
        return {
            type: this.type,
            args: this.args,
            calls: this.getFunction()
        };
    }

    /**
     * Attempt to call the agent function that this callback refers to.
     * @param agent The agent.
     */
    abstract callAgentFunction: (agent: Agent, isSuccess: boolean, isAborted: boolean) => void;
}
