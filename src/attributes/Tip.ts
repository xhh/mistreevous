import Attribute, { AttributeDetails } from "./Attribute";

export default class Tip extends Attribute<AttributeDetails> {
    /**
     * @param tip The tip/description of the related node.
     */
    constructor(tip: string) {
        super("tip", [tip]);
    }

    /**
     * Gets the attribute details.
     */
    getDetails(): AttributeDetails {
        return {
            type: this.type,
            args: this.args,
        };
    }
}